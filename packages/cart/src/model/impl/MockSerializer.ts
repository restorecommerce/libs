import { ISerializer } from '../ISerializer';

export class MockSerializer implements ISerializer {
  clear() {
  }

  deserialize(val: string): any {
  }

  load(val: any) {
  }

  save(val: any) {
  }

  serialize(val: any): string {
    return '';
  }
}
