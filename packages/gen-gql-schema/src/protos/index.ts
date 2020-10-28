import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} from "graphql";
import { GraphQLFieldConfigMap, GraphQLObjectTypeConfig } from "graphql/type/definition";

type DeepPartial<T> = any;

interface Convertible<T> {
  fromPartial(object: DeepPartial<T>): T
}

type ConvertibleInput<T> = Convertible<any>;

type Typing<T> = { [key in keyof Partial<T>]: ConvertibleInput<T> };

type TypingRegistry<T> = Map<ConvertibleInput<T>, GraphQLObjectType>;
const registeredTypings: TypingRegistry<any> = new Map();

export const registerTyping = <T>(obj: Convertible<T>, typings: Typing<T>, opts: Omit<Readonly<GraphQLObjectTypeConfig<any, any>>, 'fields'>) => {
  if (registeredTypings.has(obj)) {
    throw new Error("Typings for object are already registered");
  }

  const instance: T = obj.fromPartial({});
  const fields = {} as GraphQLFieldConfigMap<any, any>;

  for (const key of Object.keys(instance)) {
    const valueType = typeof instance[key]
    switch (valueType) {
      case "function":
      case "symbol":
        // Ignored
        break;
      case "undefined":
        if (!typings) {
          throw new Error("Missing typings for object");
        }

        if (!(key in typings)) {
          throw new Error("Missing typings for key '" + key + "' in object");
        }

        if (!registeredTypings.has(typings[key])) {
          throw new Error("Typing not registered for key '" + key + "' in object");
        }

        fields[key] = {
          type: registeredTypings.get(typings[key])
        };
        break;
      case "object":
        if (!typings) {
          throw new Error("Missing typings for object");
        }

        if (!(key in typings)) {
          throw new Error("Missing typings for key '" + key + "' in object");
        }

        if (!registeredTypings.has(typings[key])) {
          throw new Error("Typing not registered for key '" + key + "' in object");
        }

        const converted = registeredTypings.get(typings[key]);
        if (Array.isArray(instance[key])) {
          fields[key] = {
            type: GraphQLList(converted)
          };
        } else {
          fields[key] = {
            type: converted
          };
        }
        break;
      case "boolean":
        fields[key] = {
          type: GraphQLBoolean
        };
        break;
      case "number":
        fields[key] = {
          type: GraphQLFloat
        };
        break;
      case "string":
        fields[key] = {
          type: GraphQLString
        };
        break;
      case "bigint":
        fields[key] = {
          type: GraphQLInt
        };
        break;
    }
  }

  const resultObj = new GraphQLObjectType({
    ...opts,
    fields,
  });

  registeredTypings.set(obj, resultObj);
}

export const getGQLObject = <T>(obj: ConvertibleInput<T>): GraphQLObjectType | undefined => {
  return registeredTypings.get(obj);
}
