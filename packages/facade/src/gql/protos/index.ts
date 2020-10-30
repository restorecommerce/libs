import type { GraphQLFieldConfigMap, GraphQLObjectTypeConfig, GraphQLOutputType } from "graphql/type/definition";
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLUnionType,
} from "graphql";

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

const registeredTypings = new Map<string, GraphQLObjectType>();

export const registerTyping = <T>(
  type: string,
  typings: { [key in keyof T]: MetaI | string },
  opts: Omit<Readonly<GraphQLObjectTypeConfig<any, any>>, 'fields'>
) => {
  if (registeredTypings.has(type)) {
    throw new Error("Typings for object are already registered");
  }

  const fields = {} as GraphQLFieldConfigMap<any, any>;

  for (const key of Object.keys(typings)) {
    fields[key] = {
      // @ts-ignore
      type: resolveMeta(key, typings[key])
    };
  }

  const resultObj = new GraphQLObjectType({
    ...opts,
    fields,
  });

  registeredTypings.set(type, resultObj);
}

export const getGQLObject = (type: string): GraphQLObjectType | undefined => {
  return registeredTypings.get(type);
}

const resolveMeta = (key: string, value: MetaI | string): GraphQLOutputType => {
  const valueType = typeof value;
  switch (valueType) {
    case "object":
      if (!('meta' in (value as object))) {
        throw Error("unknown typing object type");
      }

      const obj = value as MetaI;
      switch (obj.meta) {
        case "object":
          const objType = (obj as MetaO).type;
          if (!registeredTypings.has(objType)) {
            throw new Error("Typing '" + objType + "' not registered for key '" + key + "' in object");
          }
          return registeredTypings.get(objType)!
        case "array":
          return GraphQLList(resolveMeta(key, (obj as MetaA).type))
        case "map":
          // TODO
          throw new Error("TODO");
        case "union":
          const choices = (obj as MetaU).choices;

          let optional = false;
          const realTypes: GraphQLObjectType[] = [];
          choices.forEach(choice => {
            if (choice === undefined) {
              optional = true;
            } else {
              const item = resolveMeta(key, choice);

              if (!(item instanceof GraphQLObjectType)) {
                throw new Error("Cannot create a union of non-object");
              }

              realTypes.push(item)
            }
          });

          if (optional && realTypes.length === 1) {
            return GraphQLNonNull(realTypes[0]);
          }

          return new GraphQLUnionType({
            name: realTypes.map(t => t.name).sort().join(),
            types: realTypes,
          });
      }

      throw new Error("unknown meta object: " + obj.meta);
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
