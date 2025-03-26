
export type ResourceAwaitFunc<T> = (resource?: T) => void;

export type ResourceAwaitMutex<T> = {
  resolve: ResourceAwaitFunc<T>;
  reject: (error?: any) => void;
};

export class ResourceAwaitQueue<T, K = string> extends Map<K, ResourceAwaitMutex<T>> {
  public override set(key: K, value: ResourceAwaitMutex<T>) {
    if (this.has(key)) {
      value.reject(new Error('Resource in use!'));
    }
    else {
      return super.set(key, value);
    }
  }

  public async await(key: K, timeout?: number) {
    return new Promise<T>(
      (resolve, reject) => {
        this.set(key, { resolve, reject });
        if (timeout) {
          setTimeout(
            () => reject({
              code: 500,
              message: `Event ${key} did not respond before timeout of ${timeout}ms!`
            }), timeout
          );
        }
      }
    );
  }

  public resolve(key: K, resource?: T) {
    this.get(key)?.resolve(resource);
    this.delete(key);
  }

  public reject(key: K, error?: any) {
    this.get(key)?.reject(error);
    this.delete(key);
  }
}