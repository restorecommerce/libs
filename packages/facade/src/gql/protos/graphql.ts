import {
  type GraphQLInputField,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  type GraphQLOutputType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  type GraphQLInputType,
  GraphQLScalarType,
} from 'graphql';
import { type Readable } from 'node:stream';
import { type ServiceDescriptorProto } from 'ts-proto-descriptors';
import { type ProtoMetadata, type ServiceConfig } from './types.js';

export const Mutate = ['Create', 'Update', 'Upsert'];

export const preProcessGQLInput = async (
  data: any,
  model: GraphQLInputObjectType | GraphQLEnumType | GraphQLInputField | GraphQLInputType
): Promise<any> => {
  if (data === null || data === undefined) {
    return data;
  }

  if (model instanceof GraphQLEnumType) {
    return data;
  }

  if (model instanceof GraphQLInputObjectType) {
    if (model.name === 'IGoogleProtobufAny') {
      // TODO Use encoded once resource base supports it
      // const typing = getTyping(data.typeUrl);
      // if (!typing) {
      //   throw Error(`GoogleProtobufAny could not find input type: ${data.typeUrl}`);
      // }
      //
      // const encoded = typing.processor.encode(typing.processor.fromPartial(data.value)).finish();

      const encoded = Buffer.from(JSON.stringify(data.value));

      return {
        ...data,
        value: encoded
      };
    } else {
      const fields = model.getFields();
      const converted = Object.assign({}, ...(await Promise.all(
        Object.keys(fields).filter(
          key => key in data
        ).map(
          async key => ({ [key]: await preProcessGQLInput(data[key], fields[key].type) })
        )
      )));
      return {
        ...data,
        ...converted,
      }
    }
  }

  if (model instanceof GraphQLScalarType) {
    if (model.name === 'IDateTime') {
      return new Date(data);
    }
  }

  if (model instanceof GraphQLNonNull) {
    return await preProcessGQLInput(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    return await Promise.all(
      data.map(
        (d: any) => preProcessGQLInput(d, model.ofType)
      )
    );
  }

  if (model instanceof GraphQLScalarType) {
    switch (model.name) {
      case 'Upload':
        if (typeof data !== 'object') {
          return Buffer.from(data.toString(), 'utf8');
        }

        let fileData = await data;
        const upload = await fileData.promise;
        const stream: Readable = upload.createReadStream();
        return stream;
    }
  }

  return data;
};

export const postProcessGQLOutput = (data: any, model: GraphQLOutputType): any => {
  if (data === null || data === undefined) {
    return data;
  }

  if (model instanceof GraphQLEnumType) {
    return data;
  }

  if (model instanceof GraphQLObjectType) {
    if (model.name === 'GoogleProtobufAny') {
      // TODO Use encoded once resource base supports it
      const decoded = JSON.parse(data?.value?.toString());

      return {
        ...data,
        value: decoded
      };
    } else {
      const fields = model.getFields();
      const converted = Object.assign({}, ...Object.keys(fields).filter(
        key => key in data
      ).map(
        key => ({ [key]: postProcessGQLOutput(data[key], fields[key].type) })
      ));
      return {
        ...data,
        ...converted,
      };
    }
  }

  if (model instanceof GraphQLNonNull) {
    return postProcessGQLOutput(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    return data.map(
      (d: any) => postProcessGQLOutput(d, model.ofType)
    );
  }

  return data;
};

export const getWhitelistBlacklistConfig = (
  metaService: ServiceDescriptorProto,
  config: ServiceConfig,
  meta: ProtoMetadata,
  entity: string
): { queries: Set<string>; mutations: Set<string> } => {
  const queryList: string[] = [];
  if (meta.options && meta.options.services && meta.options!.services[metaService.name] && meta.options!.services[metaService.name].methods) {
    const methods = meta.options!.services[metaService.name].methods!;
    for (const key of Object.keys(methods)) {
      if ('is_query' in methods[key] && methods[key]['is_query']) {
        queryList.push(key);
      }
    }
  }

  const mut: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queryList.indexOf(key) < 0) as any);
  const que: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queryList.indexOf(key) >= 0) as any);

  if (config[entity]) {
    if (config[entity]?.methods?.whitelist) {
      const whitelist = new Set(config[entity].methods.whitelist);
      mut.forEach(key => {
        if (whitelist.has(key as any)) {
          whitelist.delete(key as any);
        } else {
          mut.delete(key);
        }
      });

      que.forEach(key => {
        if (whitelist.has(key as any)) {
          whitelist.delete(key as any);
        } else {
          que.delete(key);
        }
      });

      if (whitelist.size > 0) {
        // TODO Log error that whitelist contains methods that don't exist
        console.error('Whitelist contains undefined methods:', whitelist);
      }
    } else if (config[entity]?.methods?.blacklist) {
      const blacklist = new Set(config[entity].methods.blacklist);
      mut.forEach(key => {
        if (blacklist.has(key as any)) {
          blacklist.delete(key as any);
          mut.delete(key);
        }
      });

      que.forEach(key => {
        if (blacklist.has(key as any)) {
          blacklist.delete(key as any);
          que.delete(key);
        }
      });

      if (blacklist.size > 0) {
        // TODO Log error that blacklist contains methods that don't exist
        console.error('Blacklist contains undefined methods:', blacklist);
      }
    }
  }

  if (Mutate.findIndex(val => mut.has(val)) > -1) {
    mut.add('Mutate');
  }

  return {
    mutations: mut,
    queries: que
  };
};
