import {
  GraphQLBoolean,
  GraphQLEnumTypeConfig, GraphQLEnumValueConfigMap,
  GraphQLFieldConfigMap, GraphQLFloat, GraphQLInputFieldConfigMap,
  GraphQLInputObjectTypeConfig, GraphQLInputType, GraphQLInt, GraphQLList, GraphQLNonNull,
  GraphQLObjectType,
  GraphQLObjectTypeConfig, GraphQLOutputType, GraphQLString, GraphQLUnionType, validate
} from "graphql";
import { GraphQLEnumType, GraphQLInputObjectType, GraphQLScalarType } from "graphql/type/definition";
import { GraphQLUpload } from 'graphql-upload';
import { capitalizeProtoName } from "./utils";
import { authSubjectType, ProtoMetadata } from "./types";
import {
  DescriptorProto,
  EnumDescriptorProto,
  FieldDescriptorProto, FieldDescriptorProto_Label,
  FieldDescriptorProto_Type, MethodDescriptorProto
} from "ts-proto-descriptors/google/protobuf/descriptor";
import * as _ from 'lodash';

export interface TypingData {
  output: GraphQLObjectType | GraphQLEnumType;
  input: GraphQLInputObjectType | GraphQLEnumType;
  meta: DescriptorProto | EnumDescriptorProto;
  processor?: any;
}

export const registeredTypings = new Map<string, TypingData>();

export const scalarTypes = ['Boolean', 'Int', 'Float', 'String', 'ID', 'Upload'];
const typeNameAndNameSpaceMapping = new Map<string, string>();
const registeredEnumTypes: string[] = [];
const MapScalar = new GraphQLScalarType({
  name: 'MapScalar',
});

const Mutate = ['Create', 'Update', 'Upsert'];

const TodoScalar = new GraphQLScalarType({
  name: 'TodoScalar',
  serialize: () => {
    throw Error("Not Implemented!")
  },
  parseValue: () => {
    throw Error("Not Implemented!")
  }
});

export const clearRegistry = () => {
  registeredTypings.clear();
}

export const registerPackagesRecursive = (...protoMetadata: ProtoMetadata[]) => {
  protoMetadata.forEach(meta => {
    meta.dependencies && registerPackagesRecursive(...meta.dependencies);

    meta.fileDescriptor.messageType && registerMessageTypesRecursive(meta.fileDescriptor.package!,
      meta.fileDescriptor.service[0]?.method, ...meta.fileDescriptor.messageType);

    meta.fileDescriptor.enumType?.forEach((m) => {
      registerEnumTyping(meta.fileDescriptor.package!, m);
    });

    Object.keys(meta.references).forEach(key => {
      registeredTypings.get(key)!.processor = meta.references[key];
    });
  });
}

export const getRegisteredEnumTypings = (): string[] => {
  return registeredEnumTypes;
};

export const getNameSpaceTypeName = (typeName: string): string | undefined => {
  return typeNameAndNameSpaceMapping.get(typeName);
};

// Iterate through the object and collect list of all enum types with their keys / paths
export const recursiveEnumCheck = (typeName: string, enumMap: Map<string, string>, prevFieldName: string, traversedFields: string[]): Map<string, string> => {
  if (scalarTypes.indexOf(typeName) <= -1) {
    if (typeName && typeName.startsWith('[') && typeName.endsWith('!]')) {
      typeName = typeName.substring(1, typeName.length - 2);
    }
    const objectNameSpace = getNameSpaceTypeName(typeName);
    if (objectNameSpace) {
      const objectType = getTyping(objectNameSpace);
      if (objectType?.input && (registeredEnumTypes.indexOf(objectType.input.toString()) > -1)) {
        enumMap.set(objectType?.input.toString(), prevFieldName);
        prevFieldName = '';
      } else if (objectType?.input) {
        // get nested fields from this object and check recursively
        const gqlFields = (objectType.input as GraphQLInputObjectType).getFields();
        if (gqlFields) {
          const fieldNames = Object.keys(gqlFields);
          for (let fieldName of fieldNames) {
            let fieldType = gqlFields[fieldName].type.toString(); 
            // if fieldType is not basic type, get the object and make recursive check till no more objects are found
            let skipLoop = false;
            if (scalarTypes.indexOf(fieldType) <= -1) {
              // check if fieldName already exists in the enumMap (to avoid circular reference for infinite loop)
              for (let [key, val] of enumMap) {
                const valueArray = val.split('.');
                // if fieldName already exists in enumMap, this field is a circular field ref
                // ignore it as its already traversed and enums are kept track of
                if (valueArray.indexOf(fieldName) > -1) {
                  skipLoop = true;
                }
              }
              if (skipLoop) {
                continue;
              }
              if (!prevFieldName || _.isEmpty(prevFieldName)) {
                prevFieldName = fieldName;
              }
              if (prevFieldName && prevFieldName != fieldName) {
                fieldName = prevFieldName + '.' + fieldName;
              }
              recursiveEnumCheck(fieldType, enumMap, fieldName, traversedFields);
            }
          }
        }
      }
    }
  }
  return enumMap;
};

const registerMessageTypesRecursive = (packageName: string, methodDef: MethodDescriptorProto[],
  ...types: DescriptorProto[]) => {
  types.forEach(m => {
    registerTyping(packageName, m, methodDef);

    if (m.enumType) {
      m.enumType.forEach((enumType) => {
        registerEnumTyping(packageName + '.' + m.name, enumType);
      });
    }

    if (m.nestedType) {
      registerMessageTypesRecursive(packageName + '.' + m.name, methodDef, ...m.nestedType);
    }
  });
}

const ModeType = new GraphQLEnumType({
  name: 'ModeType',
  values: {
    CREATE: {
      value: 'CREATE'
    },
    UPDATE: {
      value: 'UPDATE'
    },
    UPSERT: {
      value: 'UPSERT'
    },
  }
});

export const registerTyping = (
  protoPackage: string,
  message: DescriptorProto,
  methodDef: MethodDescriptorProto[],
  opts?: Omit<Readonly<GraphQLObjectTypeConfig<any, any>>, 'fields'>,
  inputOpts?: Omit<Readonly<GraphQLInputObjectTypeConfig>, 'fields'>,
) => {
  let insertMode = false;
  const type = (protoPackage.startsWith('.') ? '' : '.') + protoPackage + '.' + message.name!;
  if (methodDef && methodDef.length > 0) {
    for (let method of methodDef) {
      // if method def is Create, Read / Upsert and input types of method and message type are equal
      // then update input type to include `mode` parameter
      if ((Mutate.indexOf(method.name) > -1) && type === method.inputType) {
        insertMode = true;
      }
    }
  }
  if (registeredTypings.has(type)) {
    // TODO Log debug "Typings for object are already registered"
    return;
  }

  const name = opts?.name || capitalizeProtoName(type);
  const inputName = inputOpts?.name || 'I' + name;

  const fields = (): GraphQLFieldConfigMap<any, any> => {
    const result: GraphQLFieldConfigMap<any, any> = {};

    message.field?.forEach(field => {
      // TODO Union types
      const resolvedMeta = resolveMeta(field.jsonName!, field, type, name, false);

      if (resolvedMeta !== null) {
        result[field.jsonName!] = {
          type: resolvedMeta as GraphQLOutputType
        };
      }
    });

    return result;
  };

  const inputFields = (): GraphQLInputFieldConfigMap => {
    const result: GraphQLInputFieldConfigMap = {};

    message.field?.forEach(field => {
      // TODO Union types
      const resolvedMeta = resolveMeta(field.jsonName!, field, type, name, true);

      if (resolvedMeta !== null) {
        result[field.jsonName!] = {
          type: resolvedMeta as GraphQLInputType
        };
      }
    });

    if (insertMode) {
      result['mode'] = {
        type: ModeType
      };
    }
    return result;
  };

  const resultObj = new GraphQLObjectType({
    ...(opts || { name }),
    fields,
  });

  const resultInputObj = new GraphQLInputObjectType({
    ...(inputOpts || { name: inputName }),
    fields: inputFields,
  });

  typeNameAndNameSpaceMapping.set(resultInputObj.name, type);
  registeredTypings.set(type, {
    output: resultObj,
    input: resultInputObj,
    meta: message
  });
}

export const registerEnumTyping = <T = { [key: string]: any }>(
  protoPackage: string,
  message: EnumDescriptorProto,
  opts?: Omit<Readonly<GraphQLEnumTypeConfig>, 'values'>
) => {
  const type = (protoPackage.startsWith('.') ? '' : '.') + protoPackage + '.' + message.name!;
  if (registeredTypings.has(type)) {
    // TODO Log debug "Typings for enum are already registered"
    return;
  }

  const values: GraphQLEnumValueConfigMap = {};

  message.value?.forEach(entry => {
    values[entry.name!] = {
      value: entry.number!
    };
  });

  const name = opts?.name || capitalizeProtoName(type);

  const result = new GraphQLEnumType({
    ...(opts || { name }),
    values
  });

  registeredEnumTypes.push(name);
  typeNameAndNameSpaceMapping.set(name, type);
  registeredTypings.set(type, {
    output: result,
    input: result,
    meta: message
  });
}

export const getTyping = (type: string): TypingData | undefined => {
  return registeredTypings.get(type);
}

const resolveMeta = (key: string, field: FieldDescriptorProto, rootObjType: string, objName: string, input: boolean): GraphQLOutputType | GraphQLInputType | null => {
  let result;

  switch (field.type) {
    case FieldDescriptorProto_Type.TYPE_BOOL:
      result = GraphQLBoolean;
      break;
    case FieldDescriptorProto_Type.TYPE_STRING:
      result = GraphQLString;
      break;
    case FieldDescriptorProto_Type.TYPE_ENUM:
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      const objType = field.typeName!;
      if (!registeredTypings.has(objType)) {
        throw new Error("Typing '" + objType + "' not registered for key '" + key + "' in object: " + objName);
      }

      if (!input) {
        result = registeredTypings.get(objType)!.output;
        break;
      }

      if (objType === authSubjectType) {
        return null;
      }

      result = registeredTypings.get(objType)!.input;
      break;
    case FieldDescriptorProto_Type.TYPE_BYTES:
      if (input) {
        result = GraphQLUpload;
        break;
      }
      // TODO Output Buffer
      result = TodoScalar;
      break;
    case FieldDescriptorProto_Type.TYPE_INT32:
    case FieldDescriptorProto_Type.TYPE_UINT32:
    case FieldDescriptorProto_Type.TYPE_INT64:
    case FieldDescriptorProto_Type.TYPE_UINT64:
    case FieldDescriptorProto_Type.TYPE_SINT32:
    case FieldDescriptorProto_Type.TYPE_SINT64:
      result = GraphQLInt;
      break;
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
    case FieldDescriptorProto_Type.TYPE_FLOAT:
    case FieldDescriptorProto_Type.TYPE_FIXED64:
    case FieldDescriptorProto_Type.TYPE_FIXED32:
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      result = GraphQLFloat;
      break;
    default:
      throw new Error("unknown typing type '" + field.type! + "' for key '" + key + "' in: " + objName)
  }

  if (field.label === FieldDescriptorProto_Label.LABEL_REPEATED) {
    result = GraphQLList(GraphQLNonNull(result));
  }

  if (field.label === FieldDescriptorProto_Label.LABEL_REQUIRED) {
    result = GraphQLNonNull(result);
  }

  return result;
}
