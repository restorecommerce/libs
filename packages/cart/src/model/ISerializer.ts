export interface ISerializer {
  clear();

  load(val: any);

  save(val: any);

  serialize(val: any): string;

  deserialize(val: string): any;
}
