import {
  GraphQLBoolean,
  GraphQLEnumTypeConfig, GraphQLEnumValueConfigMap,
  GraphQLFieldConfigMap, GraphQLFloat, GraphQLInputFieldConfigMap,
  GraphQLInputObjectTypeConfig, GraphQLInputType, GraphQLInt, GraphQLList, GraphQLNonNull,
  GraphQLObjectType,
  GraphQLObjectTypeConfig, GraphQLOutputType, GraphQLString, GraphQLUnionType
} from "graphql";
import { GraphQLEnumType, GraphQLInputObjectType, GraphQLScalarType } from "graphql/type/definition";
import { GraphQLUpload } from 'graphql-upload';
import { capitalizeProtoName } from "./utils";
import { ProtoMetadata } from "./types";
import { IDescriptorProto, IEnumDescriptorProto, IFieldDescriptorProto } from "protobufjs/ext/descriptor";

export interface TypingData {
  output: GraphQLObjectType | GraphQLEnumType;
  input: GraphQLInputObjectType | GraphQLEnumType;
  meta: IDescriptorProto | IEnumDescriptorProto;
  processor?: any;
}

const registeredTypings = new Map<string, TypingData>();

const MapScalar = new GraphQLScalarType({
  name: 'MapScalar',
});

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

    meta.fileDescriptor.messageType && registerMessageTypesRecursive(meta.fileDescriptor.package!, ...meta.fileDescriptor.messageType);

    meta.fileDescriptor.enumType?.forEach((m) => {
      registerEnumTyping(meta.fileDescriptor.package!, m);
    });

    Object.keys(meta.references).forEach(key => {
      registeredTypings.get(key)!.processor = meta.references[key];
    });
  });
}

const registerMessageTypesRecursive = (packageName: string, ...types: IDescriptorProto[]) => {
  types.forEach(m => {
    registerTyping(packageName, m);

    if (m.enumType) {
      m.enumType.forEach((enumType) => {
        registerEnumTyping(packageName + '.' + m.name, enumType);
      });
    }

    if (m.nestedType) {
      registerMessageTypesRecursive(packageName + '.' + m.name, ...m.nestedType);
    }
  });
}

export const registerTyping = (
  protoPackage: string,
  message: IDescriptorProto,
  opts?: Omit<Readonly<GraphQLObjectTypeConfig<any, any>>, 'fields'>,
  inputOpts?: Omit<Readonly<GraphQLInputObjectTypeConfig>, 'fields'>,
) => {
  const type = (protoPackage.startsWith('.') ? '' : '.') + protoPackage + '.' + message.name!;
  if (registeredTypings.has(type)) {
    // TODO Log debug "Typings for object are already registered"
    return;
  }

  const name = opts?.name || capitalizeProtoName(type);
  const inputName = inputOpts?.name || 'I' + name;

  const fields = (): GraphQLFieldConfigMap<any, any> => {
    const result: GraphQLFieldConfigMap<any, any> = {};

    message.field?.forEach(field => {
      result[field.jsonName!] = {
        // TODO Union types
        type: resolveMeta(field.jsonName!, field, type, name, false) as GraphQLOutputType
      };
    });

    return result;
  };

  const inputFields = (): GraphQLInputFieldConfigMap => {
    const result: GraphQLInputFieldConfigMap = {};

    message.field?.forEach(field => {
      result[field.jsonName!] = {
        // TODO Union types
        type: resolveMeta(field.jsonName!, field, type, name, true) as GraphQLInputType
      };
    });

    return result;
  };

  const resultObj = new GraphQLObjectType({
    ...(opts || {name}),
    fields,
  });

  const resultInputObj = new GraphQLInputObjectType({
    ...(inputOpts || {name: inputName}),
    fields: inputFields,
  });

  registeredTypings.set(type, {
    output: resultObj,
    input: resultInputObj,
    meta: message
  });
}

export const registerEnumTyping = <T = { [key: string]: any }>(
  protoPackage: string,
  message: IEnumDescriptorProto,
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
    ...(opts || {name}),
    values
  });

  registeredTypings.set(type, {
    output: result,
    input: result,
    meta: message
  });
}

export const getTyping = (type: string): TypingData | undefined => {
  return registeredTypings.get(type);
}

const resolveMeta = (key: string, field: IFieldDescriptorProto, rootObjType: string, objName: string, input: boolean): GraphQLOutputType | GraphQLInputType => {
  let result;

  switch (field.type! as unknown as string) {
    case 'TYPE_BOOL':
      result = GraphQLBoolean;
      break;
    case 'TYPE_STRING':
      result = GraphQLString;
      break;
    case 'TYPE_ENUM':
    case 'TYPE_MESSAGE':
      const objType = field.typeName!;
      if (!registeredTypings.has(objType)) {
        throw new Error("Typing '" + objType + "' not registered for key '" + key + "' in object: " + objName);
      }

      if (!input) {
        result = registeredTypings.get(objType)!.output;
        break;
      }

      result = registeredTypings.get(objType)!.input;
      break;
    case 'TYPE_BYTES':
      if (input) {
        result = GraphQLUpload;
        break;
      }
      // TODO Output Buffer
      result = TodoScalar;
      break;
    case 'TYPE_INT32':
    case 'TYPE_UINT32':
    case 'TYPE_INT64':
    case 'TYPE_UINT64':
    case 'TYPE_SINT32':
    case 'TYPE_SINT64':
      result = GraphQLInt;
      break;
    case 'TYPE_DOUBLE':
    case 'TYPE_FLOAT':
    case 'TYPE_FIXED64':
    case 'TYPE_FIXED32':
    case 'TYPE_SFIXED32':
    case 'TYPE_SFIXED64':
      result = GraphQLFloat;
      break;
    default:
      throw new Error("unknown typing type '" + field.type! + "' for key '" + key + "' in: " + objName)
  }

  const label = field.label as unknown as (string | undefined);
  if (label === "LABEL_REPEATED") {
    result = GraphQLList(GraphQLNonNull(result));
  }

  if (label === "LABEL_REQUIRED") {
    result = GraphQLNonNull(result);
  }

  return result;
}
