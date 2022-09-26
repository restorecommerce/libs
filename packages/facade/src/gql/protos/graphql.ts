import {
  GraphQLInputField,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
} from 'graphql';
import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLScalarType,
} from 'graphql/type/definition';
import { ProtoMetadata, ServiceConfig } from './types';
import { Readable } from 'stream';
import { ServiceDescriptorProto } from 'ts-proto-descriptors';

export const Mutate = ['Create', 'Update', 'Upsert'];

export const preprocessGQLInput = async (data: any, model: GraphQLInputObjectType | GraphQLEnumType | GraphQLInputField | GraphQLInputType): Promise<any> => {
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
      for (let key of Object.keys(fields)) {
        if (data && key in data) {
          data[key] = await preprocessGQLInput(data[key], fields[key].type);
        }
      }
    }
  }

  if (model instanceof GraphQLScalarType) {
    if (model.name === 'IDateTime') {
      return new Date(data);
    }
  }

  if (model instanceof GraphQLNonNull) {
    return await preprocessGQLInput(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    for (let i = 0; i < data.length; i++) {
      data[i] = await preprocessGQLInput(data[i], model.ofType);
    }
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

        const chunks: any[] = [];
        for await (let chunk of stream) {
          chunks.push(chunk)
        }

        return Buffer.concat(chunks);
    }
  }

  return data;
}

export const postProcessGQLValue = (data: any, model: GraphQLOutputType): any => {
  if (model instanceof GraphQLEnumType) {
    return data;
  }

  if (model instanceof GraphQLObjectType) {
    if (model.name === 'GoogleProtobufAny' && data?.value) {
      // TODO Use encoded once resource base supports it

      const decoded = JSON.parse((data.value as Buffer).toString());

      return {
        ...data,
        value: decoded
      };
    } else {
      const fields = model.getFields();
      for (let key of Object.keys(fields)) {
        if (data && key in data) {
          data[key] = postProcessGQLValue(data[key], fields[key].type);
        }
      }
    }
  }

  if (model instanceof GraphQLNonNull) {
    return postProcessGQLValue(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    for (let i = 0; i < data.length; i++) {
      data[i] = postProcessGQLValue(data[i], model.ofType);
    }
  }

  return data;
}

export const getWhitelistBlacklistConfig = (
  metaService: ServiceDescriptorProto,
  config: ServiceConfig,
  meta: ProtoMetadata,
  entity: string
): { queries: Set<string>, mutations: Set<string> } => {
  const queryList: string[] = [];
  if (meta.options && meta.options.services && meta.options!.services[metaService.name] && meta.options!.services[metaService.name].methods) {
    const methods = meta.options!.services[metaService.name].methods!;
    for (const key of Object.keys(methods)) {
      if ('is_query' in methods[key] && methods[key]['is_query']) {
        queryList.push(key);
      }
    }
  }

  const mut: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queryList.indexOf(key) < 0) as any)
  const que: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queryList.indexOf(key) >= 0) as any)

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
        console.error('Whitelist contains undefined methods:', whitelist)
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
        console.error('Blacklist contains undefined methods:', blacklist)
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
}
