/* eslint-disable */
import { Subject } from '../../io/restorecommerce/auth';
import { Meta } from '../../io/restorecommerce/meta';
import { Any } from '../../google/protobuf/any';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Deleted {
  id: string;
}

export interface DeleteOrgData {
  orgIds: string[];
  userIds: string[];
  subject?: Subject;
}

export interface OrganizationList {
  items: Organization[];
  totalCount: number;
  subject?: Subject;
}

export interface Organization {
  /**
   * / Organization ID, unique, key
   */
  id: string;
  meta?: Meta;
  /**
   * / Address for the organization
   */
  addressId: string;
  /**
   *   Hierarchically superior organization; may be null
   */
  parentId: string;
  /**
   *  Hierarchically inferior organizations; may be null/empty
   */
  childrenIds: string[];
  /**
   *  list of possible legal addresses of different types
   */
  contactPointIds: string[];
  website: string;
  email: string;
  /**
   *  base64; arangoDB does not support blob storage
   */
  logo: string;
  vatId: string;
  isicV4: string;
  registration: string;
  registrationCourt: string;
  name: string;
  paymentMethodIds: string[];
  /**
   * / additional data
   */
  data?: Any;
}

const baseDeleted: object = {
  id: "",
};

const baseDeleteOrgData: object = {
  orgIds: "",
  userIds: "",
};

const baseOrganizationList: object = {
  totalCount: 0,
};

const baseOrganization: object = {
  id: "",
  addressId: "",
  parentId: "",
  childrenIds: "",
  contactPointIds: "",
  website: "",
  email: "",
  logo: "",
  vatId: "",
  isicV4: "",
  registration: "",
  registrationCourt: "",
  name: "",
  paymentMethodIds: "",
};

export interface Service {

  Read(request: ReadRequest): Promise<OrganizationList>;

  Create(request: OrganizationList): Promise<OrganizationList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: OrganizationList): Promise<OrganizationList>;

  Upsert(request: OrganizationList): Promise<OrganizationList>;

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

export const protobufPackage = 'io.restorecommerce.organization'

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

export const DeleteOrgData = {
  encode(message: DeleteOrgData, writer: Writer = Writer.create()): Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.userIds) {
      writer.uint32(18).string(v!);
    }
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteOrgData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.orgIds = [];
    message.userIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgIds.push(reader.string());
          break;
        case 2:
          message.userIds.push(reader.string());
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
  fromJSON(object: any): DeleteOrgData {
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.orgIds = [];
    message.userIds = [];
    if (object.orgIds !== undefined && object.orgIds !== null) {
      for (const e of object.orgIds) {
        message.orgIds.push(String(e));
      }
    }
    if (object.userIds !== undefined && object.userIds !== null) {
      for (const e of object.userIds) {
        message.userIds.push(String(e));
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteOrgData>): DeleteOrgData {
    const message = { ...baseDeleteOrgData } as DeleteOrgData;
    message.orgIds = [];
    message.userIds = [];
    if (object.orgIds !== undefined && object.orgIds !== null) {
      for (const e of object.orgIds) {
        message.orgIds.push(e);
      }
    }
    if (object.userIds !== undefined && object.userIds !== null) {
      for (const e of object.userIds) {
        message.userIds.push(e);
      }
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: DeleteOrgData): unknown {
    const obj: any = {};
    if (message.orgIds) {
      obj.orgIds = message.orgIds.map(e => e);
    } else {
      obj.orgIds = [];
    }
    if (message.userIds) {
      obj.userIds = message.userIds.map(e => e);
    } else {
      obj.userIds = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const OrganizationList = {
  encode(message: OrganizationList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): OrganizationList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Organization.decode(reader, reader.uint32()));
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
  fromJSON(object: any): OrganizationList {
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Organization.fromJSON(e));
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
  fromPartial(object: DeepPartial<OrganizationList>): OrganizationList {
    const message = { ...baseOrganizationList } as OrganizationList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Organization.fromPartial(e));
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
  toJSON(message: OrganizationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Organization.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const Organization = {
  encode(message: Organization, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.addressId);
    writer.uint32(34).string(message.parentId);
    for (const v of message.childrenIds) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.contactPointIds) {
      writer.uint32(50).string(v!);
    }
    writer.uint32(58).string(message.website);
    writer.uint32(66).string(message.email);
    writer.uint32(74).string(message.logo);
    writer.uint32(82).string(message.vatId);
    writer.uint32(90).string(message.isicV4);
    writer.uint32(98).string(message.registration);
    writer.uint32(106).string(message.registrationCourt);
    writer.uint32(114).string(message.name);
    for (const v of message.paymentMethodIds) {
      writer.uint32(122).string(v!);
    }
    if (message.data !== undefined && message.data !== undefined) {
      Any.encode(message.data, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Organization {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganization } as Organization;
    message.childrenIds = [];
    message.contactPointIds = [];
    message.paymentMethodIds = [];
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
          message.addressId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.childrenIds.push(reader.string());
          break;
        case 6:
          message.contactPointIds.push(reader.string());
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.email = reader.string();
          break;
        case 9:
          message.logo = reader.string();
          break;
        case 10:
          message.vatId = reader.string();
          break;
        case 11:
          message.isicV4 = reader.string();
          break;
        case 12:
          message.registration = reader.string();
          break;
        case 13:
          message.registrationCourt = reader.string();
          break;
        case 14:
          message.name = reader.string();
          break;
        case 15:
          message.paymentMethodIds.push(reader.string());
          break;
        case 16:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Organization {
    const message = { ...baseOrganization } as Organization;
    message.childrenIds = [];
    message.contactPointIds = [];
    message.paymentMethodIds = [];
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
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = String(object.addressId);
    } else {
      message.addressId = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId);
    } else {
      message.parentId = "";
    }
    if (object.childrenIds !== undefined && object.childrenIds !== null) {
      for (const e of object.childrenIds) {
        message.childrenIds.push(String(e));
      }
    }
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(String(e));
      }
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = String(object.logo);
    } else {
      message.logo = "";
    }
    if (object.vatId !== undefined && object.vatId !== null) {
      message.vatId = String(object.vatId);
    } else {
      message.vatId = "";
    }
    if (object.isicV4 !== undefined && object.isicV4 !== null) {
      message.isicV4 = String(object.isicV4);
    } else {
      message.isicV4 = "";
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = String(object.registration);
    } else {
      message.registration = "";
    }
    if (object.registrationCourt !== undefined && object.registrationCourt !== null) {
      message.registrationCourt = String(object.registrationCourt);
    } else {
      message.registrationCourt = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.paymentMethodIds !== undefined && object.paymentMethodIds !== null) {
      for (const e of object.paymentMethodIds) {
        message.paymentMethodIds.push(String(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = { ...baseOrganization } as Organization;
    message.childrenIds = [];
    message.contactPointIds = [];
    message.paymentMethodIds = [];
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
    if (object.addressId !== undefined && object.addressId !== null) {
      message.addressId = object.addressId;
    } else {
      message.addressId = "";
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId;
    } else {
      message.parentId = "";
    }
    if (object.childrenIds !== undefined && object.childrenIds !== null) {
      for (const e of object.childrenIds) {
        message.childrenIds.push(e);
      }
    }
    if (object.contactPointIds !== undefined && object.contactPointIds !== null) {
      for (const e of object.contactPointIds) {
        message.contactPointIds.push(e);
      }
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = object.logo;
    } else {
      message.logo = "";
    }
    if (object.vatId !== undefined && object.vatId !== null) {
      message.vatId = object.vatId;
    } else {
      message.vatId = "";
    }
    if (object.isicV4 !== undefined && object.isicV4 !== null) {
      message.isicV4 = object.isicV4;
    } else {
      message.isicV4 = "";
    }
    if (object.registration !== undefined && object.registration !== null) {
      message.registration = object.registration;
    } else {
      message.registration = "";
    }
    if (object.registrationCourt !== undefined && object.registrationCourt !== null) {
      message.registrationCourt = object.registrationCourt;
    } else {
      message.registrationCourt = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.paymentMethodIds !== undefined && object.paymentMethodIds !== null) {
      for (const e of object.paymentMethodIds) {
        message.paymentMethodIds.push(e);
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
  toJSON(message: Organization): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    if (message.childrenIds) {
      obj.childrenIds = message.childrenIds.map(e => e);
    } else {
      obj.childrenIds = [];
    }
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map(e => e);
    } else {
      obj.contactPointIds = [];
    }
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.logo !== undefined && (obj.logo = message.logo);
    message.vatId !== undefined && (obj.vatId = message.vatId);
    message.isicV4 !== undefined && (obj.isicV4 = message.isicV4);
    message.registration !== undefined && (obj.registration = message.registration);
    message.registrationCourt !== undefined && (obj.registrationCourt = message.registrationCourt);
    message.name !== undefined && (obj.name = message.name);
    if (message.paymentMethodIds) {
      obj.paymentMethodIds = message.paymentMethodIds.map(e => e);
    } else {
      obj.paymentMethodIds = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

export const metaDeleted: { [key in keyof Required<Deleted>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaDeleteOrgData: { [key in keyof Required<DeleteOrgData>]: MetaI | string } = {
  orgIds: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  userIds: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  subject: {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO,
}
export const metaOrganizationList: { [key in keyof Required<OrganizationList>]: MetaI | string } = {
  items: {meta:'array', type:{meta:'object', type:'.io.restorecommerce.organization.Organization', name:'Organization'} as MetaO} as MetaA,
  totalCount: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
  subject: {meta:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaO,
}
export const metaOrganization: { [key in keyof Required<Organization>]: MetaI | string } = {
  id: {meta:'builtin', type:'string', original:'string'} as MetaB,
  meta: {meta:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaO,
  addressId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  parentId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  childrenIds: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  contactPointIds: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  website: {meta:'builtin', type:'string', original:'string'} as MetaB,
  email: {meta:'builtin', type:'string', original:'string'} as MetaB,
  logo: {meta:'builtin', type:'string', original:'string'} as MetaB,
  vatId: {meta:'builtin', type:'string', original:'string'} as MetaB,
  isicV4: {meta:'builtin', type:'string', original:'string'} as MetaB,
  registration: {meta:'builtin', type:'string', original:'string'} as MetaB,
  registrationCourt: {meta:'builtin', type:'string', original:'string'} as MetaB,
  name: {meta:'builtin', type:'string', original:'string'} as MetaB,
  paymentMethodIds: {meta:'array', type:{meta:'builtin', type:'string', original:'string'} as MetaB} as MetaA,
  data: {meta:'object', type:'.google.protobuf.Any', name:'Any'} as MetaO,
}
export const metaService: { [key in keyof Service]: MetaS<any, any> } = {
  Read: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: OrganizationList.decode} as MetaS<ReadRequest, OrganizationList>,
  Create: {request: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: OrganizationList.encode, decodeResponse: OrganizationList.decode} as MetaS<OrganizationList, OrganizationList>,
  Delete: {request: {meta:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaO, response: {meta:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaS<DeleteRequest, Empty>,
  Update: {request: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: OrganizationList.encode, decodeResponse: OrganizationList.decode} as MetaS<OrganizationList, OrganizationList>,
  Upsert: {request: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, response: {meta:'object', type:'.io.restorecommerce.organization.OrganizationList', name:'OrganizationList'} as MetaO, clientStreaming: false, serverStreaming: false, encodeRequest: OrganizationList.encode, decodeResponse: OrganizationList.decode} as MetaS<OrganizationList, OrganizationList>,
}
export const metaPackageIoRestorecommerceOrganization: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  Deleted: ['message', '.io.restorecommerce.organization.Deleted', Deleted, metaDeleted],
  DeleteOrgData: ['message', '.io.restorecommerce.organization.DeleteOrgData', DeleteOrgData, metaDeleteOrgData],
  OrganizationList: ['message', '.io.restorecommerce.organization.OrganizationList', OrganizationList, metaOrganizationList],
  Organization: ['message', '.io.restorecommerce.organization.Organization', Organization, metaOrganization],
  Service: ['service', '.io.restorecommerce.organization.Service', undefined, metaService],
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