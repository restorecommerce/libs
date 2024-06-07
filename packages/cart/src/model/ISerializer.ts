export interface ISerializer {
  clear(): void;

  load(val: any): void;

  save(val: any): void;

  serialize(val: any): string;

  deserialize(val: string): any;
}
