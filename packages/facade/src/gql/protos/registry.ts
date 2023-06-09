import {
  GraphQLBoolean,
  type GraphQLEnumTypeConfig,
  type GraphQLEnumValueConfigMap,
  type GraphQLFieldConfigMap,
  GraphQLFloat,
  type GraphQLInputFieldConfigMap,
  type GraphQLInputObjectTypeConfig,
  type GraphQLInputType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  type GraphQLNullableType,
  GraphQLObjectType,
  type GraphQLObjectTypeConfig,
  type GraphQLOutputType,
  GraphQLString,
} from 'graphql';
import { GraphQLEnumType, GraphQLInputObjectType, GraphQLScalarType } from 'graphql/type/definition.js';
// import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { capitalizeProtoName } from './utils.js';
import { authSubjectType, type ProtoMetadata, type ProtoMetaMessageOptions } from './types.js';
import {
  type DescriptorProto,
  type EnumDescriptorProto,
  type FieldDescriptorProto, FieldDescriptorProto_Label,
  FieldDescriptorProto_Type, type MethodDescriptorProto
} from 'ts-proto-descriptors';
import type { Resolver } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/options.js';

export interface TypingData {
  output: GraphQLObjectType | GraphQLEnumType | GraphQLScalarType;
  input: GraphQLInputObjectType | GraphQLEnumType | GraphQLScalarType;
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

const GoogleProtobufAnyValue = new GraphQLScalarType({
  name: 'GoogleProtobufAnyValue'
});

const protobufAnyFields = {
  typeUrl: {
    type: GraphQLString
  },
  value: {
    type: GoogleProtobufAnyValue
  }
};

const GoogleProtobufAny = new GraphQLObjectType({
  name: 'GoogleProtobufAny',
  fields: protobufAnyFields
});

export const IGoogleProtobufAny = new GraphQLInputObjectType({
  name: 'IGoogleProtobufAny',
  fields: protobufAnyFields
});

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: `A date-time string at UTC, such as 2007-12-03T10:15:30Z,
                compliant with the date-time format outlined in section 5.6 of
                the RFC 3339 profile of the ISO 8601 standard for representation
                of dates and times using the Gregorian calendar.`,
});

const IDateTime = new GraphQLScalarType({
  name: 'IDateTime',
  description: `A date-time string at UTC, such as 2007-12-03T10:15:30Z,
                compliant with the date-time format outlined in section 5.6 of
                the RFC 3339 profile of the ISO 8601 standard for representation
                of dates and times using the Gregorian calendar.`,
});

const googleProtobufAnyName = '.google.protobuf.Any';
const googleProtobufTimestampName = '.google.protobuf.Timestamp';

const Mutate = ['Create', 'Update', 'Upsert'];
const CRUD_TRAVERSAL_OP_NAMES = ['Cretae', 'Update', 'Upsert', 'Delete', 'Read', 'Traversal'];

const TodoScalar = new GraphQLScalarType({
  name: 'TodoScalar',
  serialize: () => {
    throw Error('Not Implemented!');
  },
  parseValue: () => {
    throw Error('Not Implemented!');
  }
});

export const clearRegistry = () => {
  registeredTypings.clear();
};

export const getRegisteredEnumTypings = (): string[] => {
  return registeredEnumTypes;
};

export const getNameSpaceTypeName = (typeName: string): string | undefined => {
  return typeNameAndNameSpaceMapping.get(typeName);
};

export const getTyping = (type: string): TypingData | undefined => {
  return registeredTypings.get(type);
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
            if (scalarTypes.indexOf(fieldType) <= -1) {
              // check if fieldName already exists in the traversedFields (to avoid circular reference for infinite loop)
              if (traversedFields.indexOf(fieldName) <= -1) {
                traversedFields.push(fieldName);
              } else if (traversedFields.indexOf(fieldName) > -1) {
                // skip loop as this GQL type is already traversed
                continue;
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

const resolveMeta = <T extends GraphQLOutputType | GraphQLInputType>(
  key: string,
  field: Pick<FieldDescriptorProto, 'type' | 'typeName' | 'label'>,
  rootObjType: string,
  objName: string,
  input: boolean
): T | null => {
  let result: GraphQLNullableType;

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

      if (objType === googleProtobufAnyName) {
        if (input) {
          result = IGoogleProtobufAny;
          break;
        }
        result = GoogleProtobufAny;
        break;
      }

      if (objType === googleProtobufTimestampName) {
        if (input) {
          result = IDateTime;
          break;
        }
        result = DateTime;
        break;
      }

      if (!registeredTypings.has(objType)) {
        throw new Error('Typing \'' + objType + '\' not registered for key \'' + key + '\' in object: ' + objName);
      }

      let typingData = registeredTypings.get(objType)!;
      let mapEntry = false;
      if ((typingData.meta as DescriptorProto).options) {
        mapEntry = !!(typingData.meta as DescriptorProto).options?.mapEntry;
      }

      // TODO Actually unroll maps into entries
      if (mapEntry) {
        return MapScalar as any;
      }

      if (!input) {
        result = typingData.output;
        break;
      }

      if (objType === authSubjectType) {
        return null;
      }

      result = typingData.input;
      break;
    case FieldDescriptorProto_Type.TYPE_BYTES:
      if (input) {
        // TODO Why can't it be nullable?
        result = GraphQLUpload as any;
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
      throw new Error('unknown typing type \'' + field.type! + '\' for key \'' + key + '\' in: ' + objName);
  }

  if (field.label === FieldDescriptorProto_Label.LABEL_REPEATED) {
    result = new GraphQLList(new GraphQLNonNull(result));
  }

  if (field.label === FieldDescriptorProto_Label.LABEL_REQUIRED) {
    result = new GraphQLNonNull(result);
  }

  return result as any;
};

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
  messageOptions?: ProtoMetaMessageOptions
) => {
  let insertMode = false;
  let crudOperation = false;
  const type = (protoPackage.startsWith('.') ? '' : '.') + protoPackage + '.' + message.name!;
  if (methodDef && methodDef.length > 0) {
    for (let method of methodDef) {
      // if method def is Create, Read / Upsert and input types of method and message type are equal
      // then update input type to include `mode` parameter
      if ((Mutate.indexOf(method.name) > -1) && type === method.inputType) {
        insertMode = true;
      }
      // add scope
      if ((CRUD_TRAVERSAL_OP_NAMES.indexOf(method.name) > -1) && type === method.inputType) {
        crudOperation = true;
      }
    }
  }

  if (type === googleProtobufAnyName) {
    // Do not register any type
    typeNameAndNameSpaceMapping.set(GoogleProtobufAny.name, type);
    registeredTypings.set(type, {
      output: GoogleProtobufAny,
      input: IGoogleProtobufAny,
      meta: message
    });
  }

  if (type === googleProtobufTimestampName) {
    typeNameAndNameSpaceMapping.set(DateTime.name, type);
    registeredTypings.set(type, {
      output: DateTime,
      input: IDateTime,
      meta: message
    });
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
      const resolvedMeta = resolveMeta<GraphQLOutputType>(field.jsonName!, field, type, name, false);

      if (resolvedMeta !== null) {
        result[field.jsonName!] = {
          type: resolvedMeta
        };
      }

      if (messageOptions && messageOptions.fields) {
        if (field.name in messageOptions.fields) {
          const data = messageOptions.fields[field.name].resolver as Resolver;
          const resolved = resolveMeta(data.fieldName, {
            type: FieldDescriptorProto_Type.TYPE_MESSAGE,
            label: field.label,
            typeName: data.targetType
          }, type, name, false);
          if (resolvedMeta !== null) {
            result[data.fieldName!] = {
              type: resolved as GraphQLOutputType
            };
          }
        }
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
    if (crudOperation) {
      // add scope to all mutations / queries
      if (!result.scope) {
        result['scope'] = {
          description: 'target scope',
          type: GraphQLString
        };
      }
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
};

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
};

const registerMessageTypesRecursive = (
  packageName: string,
  methodDef: MethodDescriptorProto[],
  options: ProtoMetadata['options'] | undefined,
  ...types: DescriptorProto[]
) => {
  types.forEach(m => {
    registerTyping(packageName, m, methodDef, undefined, undefined, options && options.messages && options.messages[m.name]);

    if (m.enumType) {
      m.enumType.forEach((enumType) => {
        registerEnumTyping(packageName + '.' + m.name, enumType);
      });
    }

    if (m.nestedType) {
      registerMessageTypesRecursive(packageName + '.' + m.name, methodDef, options, ...m.nestedType);
    }
  });
};

export const registerPackagesRecursive = (...protoMetadata: ProtoMetadata[]) => {
  protoMetadata.forEach(meta => {
    meta.dependencies && registerPackagesRecursive(...meta.dependencies);

    meta.fileDescriptor.messageType && registerMessageTypesRecursive(
      meta.fileDescriptor.package!,
      meta.fileDescriptor.service[0]?.method,
      meta.options,
      ...meta.fileDescriptor.messageType
    );

    meta.fileDescriptor.enumType?.forEach((m) => {
      registerEnumTyping(meta.fileDescriptor.package!, m);
    });

    Object.keys(meta.references).forEach(key => {
      registeredTypings.get(key)!.processor = meta.references[key];
    });
  });
};

