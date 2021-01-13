import {
  GraphQLBoolean,
  GraphQLEnumTypeConfig, GraphQLEnumValueConfigMap,
  GraphQLFieldConfigMap, GraphQLFloat, GraphQLInputFieldConfigMap,
  GraphQLInputObjectTypeConfig, GraphQLInputType, GraphQLInt, GraphQLList, GraphQLNonNull,
  GraphQLObjectType,
  GraphQLObjectTypeConfig, GraphQLOutputType, GraphQLString, GraphQLUnionType
} from "graphql";
import { GraphQLEnumType, GraphQLInputObjectType, GraphQLScalarType } from "graphql/type/definition";
import { MetaArray, MetaPrimitive, MetaBase, MetaMessage, MetaP, MetaPTypes, MetaUnion } from "./types";
import { GraphQLUpload } from 'graphql-upload';
import { capitalizeProtoName } from "./utils";


export interface TypingData {
  output: GraphQLObjectType | GraphQLEnumType;
  input: GraphQLInputObjectType | GraphQLEnumType;
  meta: MetaPTypes
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

export const registerPackages = (...packs: MetaP[]) => {
  packs.forEach(pack => {
    for (let key of Object.keys(pack)) {
      const val = pack[key];
      const fullName = capitalizeProtoName(val[1]);
      if (val[0] === 'message') {
        registerTyping(val[1], val[3], key, pack, {name: fullName}, {name: 'I' + fullName});
      } else if (val[0] === 'enum') {
        registerEnumTyping(val[1], val[2], key, pack, {name: fullName});
      }
    }
  });
}

export const registerTyping = <T>(
  type: string,
  typings: { [key in keyof T]: MetaBase | string },
  nodeName: string,
  pack: MetaP,
  opts: Omit<Readonly<GraphQLObjectTypeConfig<any, any>>, 'fields'>,
  inputOpts: Omit<Readonly<GraphQLInputObjectTypeConfig>, 'fields'>,
) => {
  if (registeredTypings.has(type)) {
    // TODO Log debug "Typings for object are already registered"
    return;
  }

  const fields = (): GraphQLFieldConfigMap<any, any> => {
    const result: GraphQLFieldConfigMap<any, any> = {};
    for (const key of Object.keys(typings)) {
      // @ts-ignore
      const value = typings[key];
      result[key] = {
        type: GraphQLNonNull(resolveMeta(key, value, type, opts.name, false) as GraphQLOutputType)
      };
    }
    return result;
  };

  const inputFields = (): GraphQLInputFieldConfigMap => {
    const result: GraphQLInputFieldConfigMap = {};
    for (const key of Object.keys(typings)) {
      // @ts-ignore
      const value = typings[key];
      result[key] = {
        type: GraphQLNonNull(resolveMeta(key, value, type, opts.name, true) as GraphQLInputType)
      };
    }
    return result;
  };

  const resultObj = new GraphQLObjectType({
    ...opts,
    fields,
  });

  const resultInputObj = new GraphQLInputObjectType({
    ...inputOpts,
    fields: inputFields,
  });

  registeredTypings.set(type, {
    output: resultObj,
    input: resultInputObj,
    meta: pack[nodeName]
  });
}

export const registerEnumTyping = <T = { [key: string]: any }>(
  type: string,
  obj: T,
  nodeName: string,
  pack: MetaP,
  opts: Omit<Readonly<GraphQLEnumTypeConfig>, 'values'>
) => {
  if (registeredTypings.has(type)) {
    // TODO Log debug "Typings for enum are already registered"
    return;
  }

  const values: GraphQLEnumValueConfigMap = {};

  for (const key of Object.keys(obj)) {
    // @ts-ignore
    if (typeof obj[key] !== 'number') {
      continue;
    }

    values[key] = {
      // @ts-ignore
      value: obj[key],
    };
  }

  const result = new GraphQLEnumType({
    ...opts,
    values
  });

  registeredTypings.set(type, {
    output: result,
    input: result,
    meta: pack[nodeName]
  });
}

export const getTyping = (type: string): TypingData | undefined => {
  return registeredTypings.get(type);
}

const resolveMeta = (key: string, value: MetaBase | string, rootObjType: string, objName: string, input: boolean): GraphQLOutputType | GraphQLInputType => {
  const valueType = typeof value;
  switch (valueType) {
    case "object":
      if (!('kind' in (value as object))) {
        throw Error("unknown typing object type");
      }

      const obj = value as MetaBase;
      switch (obj.kind) {
        case "object":
          const objType = (obj as MetaMessage).type;
          if (!registeredTypings.has(objType)) {
            throw new Error("Typing '" + objType + "' not registered for key '" + key + "' in object: " + objName);
          }

          if (!input) {
            return registeredTypings.get(objType)!.output
          }

          return registeredTypings.get(objType)!.input
        case "array":
          return GraphQLList(GraphQLNonNull(resolveMeta(key, (obj as MetaArray).type, rootObjType, objName, input)))
        case "map":
          // TODO
          return MapScalar;
        case "union":
          if (input) {
            // TODO https://github.com/graphql/graphql-spec/blob/master/rfcs/InputUnion.md
            return TodoScalar
          }

          const choices = (obj as MetaUnion).choices;

          let optional = false;
          const realTypes: GraphQLObjectType[] = [];
          choices.forEach(choice => {
            if (choice === undefined) {
              optional = true;
            } else {
              const item = resolveMeta(key, choice, rootObjType, objName, input);

              if (!(item instanceof GraphQLObjectType)) {
                throw new Error("Cannot create a union of non-objects");
              }

              realTypes.push(item)
            }
          });

          if (optional && realTypes.length === 1) {
            return realTypes[0];
          }

          return new GraphQLUnionType({
            name: realTypes.map(t => t.name).sort().join(),
            types: realTypes,
          });
        case "builtin":
          const builtin = (obj as MetaPrimitive).type;
          switch (builtin) {
            default:
              throw new Error("unknown typing type '" + builtin + "' for key '" + key + "' in: " + objName)
            case "Buffer":
              if (input) {
                return GraphQLUpload;
              }
              // TODO Output Buffer
              return TodoScalar
            case "boolean":
              return GraphQLBoolean
            case "string":
              return GraphQLString
            case "bigint":
            case "number":
              switch ((obj as MetaPrimitive).original) {
                default:
                  return GraphQLInt
                case 'double':
                case 'float':
                case 'fixed64':
                case 'sfixed64':
                case 'fixed32':
                case 'sfixed32':
                  return GraphQLFloat
              }
              return GraphQLFloat
          }
          break
      }

      throw new Error("unknown meta object: " + obj.kind);
    case "string":
      switch (value) {
        default:
          throw new Error("unknown typing type: " + value)
        case "boolean":
          return GraphQLBoolean
        case "number":
          return GraphQLFloat
        case "string":
          return GraphQLString
        case "bigint":
          return GraphQLInt
      }
      break;
  }

  throw new Error("typing value cannot be type of " + typeof valueType);
}
