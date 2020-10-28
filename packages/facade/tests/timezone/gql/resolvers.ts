import { Timezone } from '@restorecommerce/rc-grpc-clients';
import { resolveCRUDReadResources, resolveCRUDCreateResources, resolveCRUDDeleteResources, resolveCRUDUpdateResources } from '../../../src';
import { Resolvers } from './schema.generated';

export const resolvers: Resolvers = {
  Query: {
    async readTimezones(parent, {input}, ctx, info) {
      return await resolveCRUDReadResources({
        service: ctx.timezoneService,
        input,
        mapResponseItem: (item) => item
      });
    },
  },
  Mutation: {
    async createTimezones(parent, {input}, ctx, info) {
      return await resolveCRUDCreateResources({
        service: ctx.timezoneService,
        input,
        mapRequestItem: (item) => Timezone.fromPartial(item),
        mapResponseItem: (item) => Timezone.fromPartial(item),
      });
    },
    async updateTimezones(parent, {input}, ctx, info) {
      return await resolveCRUDUpdateResources({
        service: ctx.timezoneService,
        input,
        mapRequestItem: (item) => Timezone.fromPartial(item),
        mapResponseItem: (item) => Timezone.fromPartial(item),
      });
    }    ,
    async deleteTimezones(parent, {input}, ctx, info) {
      return await resolveCRUDDeleteResources({
        service: ctx.timezoneService,
        input,
      });
    }
  }
}
