
import { type ServiceConfig } from '@restorecommerce/service-config';
import { type Logger } from '@restorecommerce/logger';
import {
  Resource,
  ResourceList,
  ResourceListResponse,
  Filter_ValueType,
  Filter_Operation,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import {
  type CallContext,
} from 'nice-grpc-common';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import {
  ResourceMap,
  OnMissingCallback,
  DEFAULT_STRICT_CALLBACK,
} from './ResourceMap';
import {
  ClientRegister,
  CRUDServiceDefinition
} from './ClientRegister';

export type Aggregation<T extends ResourceListResponse & ResourceList = any, C = any> = T & C;
export type ResolverParams<T = any, M = ResolverMap<T>> = [string, Map<string, T>, M?, T?];
export type ArrayResolverParams<T = any, M = ResolverMap<T>> = [string, Map<string, T>, M[]?, T[]?];
export type ElementOf<T = any> = T extends Array<infer E> ? E : T;
export type ResolverMap<T = any> = {
  [K in keyof T]?: ResolverParams<T[K]> | ArrayResolverParams<T[K]> | T[K]
} & {};
export type ResolvedNode<T, M> = T extends ResolverParams
  ? (
    T[2] extends object
      ? Resolved<T[3] & T[2], T[2]>
      : T[3]
  )
  : M extends object
    ? Resolved<T & M, M>
    : T;
export type Resolved<T extends ResolverMap, M extends ResolverMap> = {
  [K in keyof T]?: T[K] extends object
    ? ResolvedNode<T[K], M[K]>
    : T[K]
};

export const Resolver = <T, M>(
  search_key: string,
  source: Map<string, T>,
  map?: M,
): ResolverParams<T, M> => [
  search_key,
  source,
  map,
  {} as T,
];

export const ArrayResolver = <T, M>(
  search_key: string,
  source: Map<string, T>,
  map?: M,
): ArrayResolverParams<T, M> => [
  search_key,
  source,
  [map],
  [] as T[]
];

export class ResourceAggregator {
  constructor(
    protected readonly cfg: ServiceConfig,
    protected readonly logger: Logger,
    protected readonly register = new ClientRegister(cfg, logger),
  ) {}

  public async getByIds<R extends Resource>(
    ids: string | string[],
    service: CRUDServiceDefinition,
    subject?: Subject,
    context?: CallContext,
  ) {
    ids = [...new Set(
      [ids].flatMap(
        id => id
      ).filter(
        id => id
      )
    )];
    const request = ids?.length ? {
      filters: [{
        filters: [
          {
            field: '_key',
            operation: Filter_Operation.in,
            value: JSON.stringify(ids),
            type: Filter_ValueType.ARRAY,
          }
        ]
      }],
      limit: ids.length,
      subject,
    } : undefined;
    const client = this.register.get(service) as any;
    const response = request && await client.read(request, context);
    const map = new ResourceMap<R>(
      response?.items?.map(
        (item: any) => item.payload
      ),
      service?.name?.toString()
    );
    return map;
  }

  public async aggregate<T extends object, C>(
    target: T,
    sources: {
      service: CRUDServiceDefinition;
      map_by_ids: (target: T) => string[];
      container: string;
      entity?: string;
    }[],
    template?: C,
    subject?: Subject,
    context?: CallContext,
    strict: OnMissingCallback = DEFAULT_STRICT_CALLBACK,
  ): Promise<Aggregation<T, C>> {
    const ids = sources.map(
      source => source.map_by_ids(target)
    );
    const source_map = await Promise.all(
      sources.map(
        (source, i) => this.getByIds(
          ids[i] ?? [],
          source.service,
          subject,
          context,
        )
      )
    );
    const aggregation = Object.assign(
      target,
      ...sources.map((source, i) => ({
        [source.container]: new ResourceMap(
          source_map[i].getMany(
            ids[i]?.flatMap(ids => ids) ?? [],
            strict
          ),
          source.entity
        )
      })),
    ) as Aggregation<T, typeof template>;
    return aggregation;
  }
}

export function resolve<T, M extends ResolverMap>(
  entity: T,
  resolverMap?: M,
): Resolved<T & M, M>;
export function resolve<T, M extends ResolverMap>(
  entity: T[],
  resolverMap?: M[],
): Resolved<T & M, M>[] {
  if (!entity) {
    return;
  }
  else if (Array.isArray(entity)) {
    return entity.map(value => resolve(value, resolverMap[0]));
  }
  else {
    const copy = { ...(entity as any) };
    return Object.assign(
      copy,
      ...Object.entries(resolverMap ?? {}).map(
        ([k, r]) => {
          const id = typeof r?.[0] === 'string' && copy[r[0]];
          if (!id) {
            return {
              [k]: r?.[2] ? resolve(copy[k], r[2]) : resolve(copy[k], r)
            };
          }
          else if (Array.isArray(id)) {
            return {
              [k]: id.map(
                id => r[2]
                  ? resolve(r[1]?.get(id.toString()), r[2])
                  : r[1]?.get(id.toString())
              )
            };
          }
          else if (typeof id === 'string') {
            return {
              [k]: r[2]
                ? resolve(r[1]?.get(id), r[2])
                : r[1]?.get(id)
            };
          }
        }
      ).filter(e => e)
    );
  }
}