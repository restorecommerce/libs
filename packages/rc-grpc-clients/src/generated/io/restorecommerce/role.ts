/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Subject } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Role {
  id: string;
  meta?: Meta;
  /**
   *  specifies the role of the user
   */
  name: string;
  description: string;
  /**
   *  role id who can assign this role
   */
  assignableByRoles: string[];
}

export interface RoleList {
  items: Role[];
  totalCount: number;
  subject?: Subject;
}

export interface Deleted {
  id: string;
}

const baseRole: object = {
  id: "",
  name: "",
  description: "",
  assignableByRoles: "",
};

const baseRoleList: object = {
  totalCount: 0,
};

const baseDeleted: object = {
  id: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<RoleList>;

  Create(request: RoleList): Promise<RoleList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: RoleList): Promise<RoleList>;

  Upsert(request: RoleList): Promise<RoleList>;

}

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.role'

export const Role = {
  encode(message: Role, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    for (const v of message.assignableByRoles) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Role {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRole } as Role;
    message.assignableByRoles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.assignableByRoles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Role {
    const message = { ...baseRole } as Role;
    message.assignableByRoles = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.assignableByRoles !== undefined && object.assignableByRoles !== null) {
      for (const e of object.assignableByRoles) {
        message.assignableByRoles.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Role>): Role {
    const message = { ...baseRole } as Role;
    message.assignableByRoles = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.assignableByRoles !== undefined && object.assignableByRoles !== null) {
      for (const e of object.assignableByRoles) {
        message.assignableByRoles.push(e);
      }
    }
    return message;
  },
  toJSON(message: Role): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    if (message.assignableByRoles) {
      obj.assignableByRoles = message.assignableByRoles.map(e => e);
    } else {
      obj.assignableByRoles = [];
    }
    return obj;
  },
};

export const RoleList = {
  encode(message: RoleList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RoleList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoleList } as RoleList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Role.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RoleList {
    const message = { ...baseRoleList } as RoleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Role.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleList>): RoleList {
    const message = { ...baseRoleList } as RoleList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Role.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: RoleList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Role.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleted } as Deleted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const metaRole: { [key in keyof Required<Role>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  description: {meta:'builtin', type:'string', original:'string'} as MetaB,
  assignableByRoles: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
}
export const metaRoleList: { [key in keyof Required<RoleList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.role.Role', name:'Role'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO]} as MetaU,
  apiKey: {meta:'union', choices: [undefined, {meta:'object', type:'.io.restorecommerce.auth.ApiKey', name:'ApiKey'} as MetaO]} as MetaU,
}
export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: RoleList.decode} as MetaS<ReadRequest, RoleList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: RoleList.encode, decodeResponse: RoleList.decode} as MetaS<RoleList, RoleList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: RoleList.encode, decodeResponse: RoleList.decode} as MetaS<RoleList, RoleList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.role.RoleList', name:'RoleList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: RoleList.encode, decodeResponse: RoleList.decode} as MetaS<RoleList, RoleList>,
}
export const metaPackageIoRestorecommerceRole: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Role: ['message', '.io.restorecommerce.role.Role', Role, metaRole],
  RoleList: ['message', '.io.restorecommerce.role.RoleList', RoleList, metaRoleList],
  Deleted: ['message', '.io.restorecommerce.role.Deleted', Deleted, metaDeleted],
  Service: ['service', '.io.restorecommerce.role.Service', undefined, metaService],
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;