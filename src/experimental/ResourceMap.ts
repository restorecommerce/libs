import {
  Resource,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import {
  Status,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/status.js';


export type OnMissingCallback = (id?: string, entity?: string) => any;

export const DEFAULT_STRICT_CALLBACK: OnMissingCallback = (
  id?: string,
  entity?: string
) => {
  throw new Error(`Resource missing: { id: ${id}, entity: ${entity} }!`);
};

export const DEFAULT_STATUS_CALLBACK: OnMissingCallback = (
  id?: string,
  entity?: string
): Status => ({
  id,
  code: 404,
  message: `${entity ?? 'Entity'} ${id} is missing!`
});

export class ResourceMap<T extends Resource = any> extends Map<string, T> {
  protected _all?: T[];

  public get all() {
    this._all = this._all ?? [...this.values()];
    return this._all;
  }

  constructor(
    items?: T[],
    public readonly entity = items[0]?.constructor?.name,
  ) {
    super(items?.filter(
      item => item,
    ).map(
      item => [item.id, item]
    ));
  }

  public override set(key: string, value: T) {
    delete this._all;
    return super.set(key, value);
  }

  public override clear() {
    delete this._all;
    return super.clear();
  }

  public override delete(key: string) {
    delete this._all;
    return super.delete(key);
  }

  public override get(
    id: string,
    onMissing: OnMissingCallback = DEFAULT_STRICT_CALLBACK
  ): T {
    if (id && onMissing && !this.has(id)) {
      const error = onMissing(id, this.entity);
      if (error) {
        throw error;
      }
    }
    return super.get(id);
  }

  public getMany(
    ids: string[],
    onMissing: OnMissingCallback = DEFAULT_STRICT_CALLBACK
  ): T[] {
    return ids?.map(id => this.get(id, onMissing));
  }
}