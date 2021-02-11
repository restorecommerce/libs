/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import {
  Subject,
  protoMetadata as io_restorecommerce_auth_protoMetadata,
} from "../../io/restorecommerce/auth";
import {
  Meta,
  protoMetadata as io_restorecommerce_meta_protoMetadata,
} from "../../io/restorecommerce/meta";
import {
  Any,
  protoMetadata as google_protobuf_any_protoMetadata,
} from "../../google/protobuf/any";
import { Writer, Reader } from "protobufjs/minimal";
import {
  Empty,
  protoMetadata as google_protobuf_empty_protoMetadata,
} from "../../google/protobuf/empty";
import {
  ReadRequest,
  DeleteRequest,
  protoMetadata as io_restorecommerce_resource_base_protoMetadata,
} from "../../io/restorecommerce/resource_base";

export const protobufPackage = "io.restorecommerce.organization";

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
  /** / Organization ID, unique, key */
  id: string;
  meta?: Meta;
  /** / Address for the organization */
  addressId: string;
  /** Hierarchically superior organization; may be null */
  parentId: string;
  /** Hierarchically inferior organizations; may be null/empty */
  childrenIds: string[];
  /** list of possible legal addresses of different types */
  contactPointIds: string[];
  website: string;
  email: string;
  /** base64; arangoDB does not support blob storage */
  logo: string;
  vatId: string;
  isicV4: string;
  registration: string;
  registrationCourt: string;
  name: string;
  paymentMethodIds: string[];
  /** / additional data */
  data?: Any;
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
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

const baseDeleteOrgData: object = { orgIds: "", userIds: "" };

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

  decode(input: Reader | Uint8Array, length?: number): DeleteOrgData {
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
      obj.orgIds = message.orgIds.map((e) => e);
    } else {
      obj.orgIds = [];
    }
    if (message.userIds) {
      obj.userIds = message.userIds.map((e) => e);
    } else {
      obj.userIds = [];
    }
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseOrganizationList: object = { totalCount: 0 };

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

  decode(input: Reader | Uint8Array, length?: number): OrganizationList {
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
      obj.items = message.items.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
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

  decode(input: Reader | Uint8Array, length?: number): Organization {
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
    if (
      object.contactPointIds !== undefined &&
      object.contactPointIds !== null
    ) {
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
    if (
      object.registrationCourt !== undefined &&
      object.registrationCourt !== null
    ) {
      message.registrationCourt = String(object.registrationCourt);
    } else {
      message.registrationCourt = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.paymentMethodIds !== undefined &&
      object.paymentMethodIds !== null
    ) {
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
    if (
      object.contactPointIds !== undefined &&
      object.contactPointIds !== null
    ) {
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
    if (
      object.registrationCourt !== undefined &&
      object.registrationCourt !== null
    ) {
      message.registrationCourt = object.registrationCourt;
    } else {
      message.registrationCourt = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.paymentMethodIds !== undefined &&
      object.paymentMethodIds !== null
    ) {
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
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.addressId !== undefined && (obj.addressId = message.addressId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    if (message.childrenIds) {
      obj.childrenIds = message.childrenIds.map((e) => e);
    } else {
      obj.childrenIds = [];
    }
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map((e) => e);
    } else {
      obj.contactPointIds = [];
    }
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.logo !== undefined && (obj.logo = message.logo);
    message.vatId !== undefined && (obj.vatId = message.vatId);
    message.isicV4 !== undefined && (obj.isicV4 = message.isicV4);
    message.registration !== undefined &&
      (obj.registration = message.registration);
    message.registrationCourt !== undefined &&
      (obj.registrationCourt = message.registrationCourt);
    message.name !== undefined && (obj.name = message.name);
    if (message.paymentMethodIds) {
      obj.paymentMethodIds = message.paymentMethodIds.map((e) => e);
    } else {
      obj.paymentMethodIds = [];
    }
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<OrganizationList>;
  Create(request: OrganizationList): Promise<OrganizationList>;
  Delete(request: DeleteRequest): Promise<Empty>;
  Update(request: OrganizationList): Promise<OrganizationList>;
  Upsert(request: OrganizationList): Promise<OrganizationList>;
}

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/empty.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Deleted",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
        ],
      },
      {
        name: "DeleteOrgData",
        field: [
          {
            name: "org_ids",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "orgIds",
          },
          {
            name: "user_ids",
            number: 2,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "userIds",
          },
          {
            name: "subject",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
      },
      {
        name: "OrganizationList",
        field: [
          {
            name: "items",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.organization.Organization",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_UINT32",
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
      },
      {
        name: "Organization",
        field: [
          {
            name: "id",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "id",
          },
          {
            name: "meta",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "address_id",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "addressId",
          },
          {
            name: "parent_id",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "parentId",
          },
          {
            name: "children_ids",
            number: 5,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "childrenIds",
          },
          {
            name: "contact_point_ids",
            number: 6,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "contactPointIds",
          },
          {
            name: "website",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "website",
          },
          {
            name: "email",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "email",
          },
          {
            name: "logo",
            number: 9,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "logo",
          },
          {
            name: "vat_id",
            number: 10,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "vatId",
          },
          {
            name: "isic_v4",
            number: 11,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "isicV4",
          },
          {
            name: "registration",
            number: 12,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "registration",
          },
          {
            name: "registration_court",
            number: 13,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "registrationCourt",
          },
          {
            name: "name",
            number: 14,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "name",
          },
          {
            name: "payment_method_ids",
            number: 15,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "paymentMethodIds",
          },
          {
            name: "data",
            number: 16,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".google.protobuf.Any",
            jsonName: "data",
          },
        ],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Service",
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".io.restorecommerce.organization.OrganizationList",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType: ".io.restorecommerce.organization.OrganizationList",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".google.protobuf.Empty",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType: ".io.restorecommerce.organization.OrganizationList",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.organization.OrganizationList",
            outputType: ".io.restorecommerce.organization.OrganizationList",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/organization.proto",
    package: "io.restorecommerce.organization",
    sourceCodeInfo: {
      location: [
        {
          path: [4, 3, 2, 0],
          span: [35, 2, 16],
          trailingComments: "/ Organization ID, unique, key\n",
        },
        {
          path: [4, 3, 2, 2],
          span: [37, 2, 24],
          trailingComments: "/ Address for the organization\n",
        },
        {
          path: [4, 3, 2, 3],
          span: [38, 2, 23],
          trailingComments:
            "  Hierarchically superior organization; may be null\n",
        },
        {
          path: [4, 3, 2, 4],
          span: [39, 2, 35],
          trailingComments:
            " Hierarchically inferior organizations; may be null/empty\n",
        },
        {
          path: [4, 3, 2, 5],
          span: [40, 2, 40],
          trailingComments:
            " list of possible legal addresses of different types\n",
        },
        {
          path: [4, 3, 2, 8],
          span: [43, 2, 18],
          trailingComments: " base64; arangoDB does not support blob storage\n",
        },
        {
          path: [4, 3, 2, 15],
          span: [50, 2, 32],
          trailingComments: "/ additional data\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.organization.Deleted": Deleted,
    ".io.restorecommerce.organization.DeleteOrgData": DeleteOrgData,
    ".io.restorecommerce.organization.OrganizationList": OrganizationList,
    ".io.restorecommerce.organization.Organization": Organization,
  },
  dependencies: [
    io_restorecommerce_resource_base_protoMetadata,
    google_protobuf_empty_protoMetadata,
    google_protobuf_any_protoMetadata,
    io_restorecommerce_meta_protoMetadata,
    io_restorecommerce_auth_protoMetadata,
  ],
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
