/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata2, Reference } from "./reference";
import { OperationStatusObj, protoMetadata as protoMetadata1 } from "./status";

export const protobufPackage = "io.restorecommerce.notification_req";

/** mimics nodemailer properties for easy configuration */
export interface Attachment {
  filename?:
    | string
    | undefined;
  /** the "content" may be on of the following: */
  text?:
    | string
    | undefined;
  /** for binary data, eg.: images */
  buffer?: Buffer | undefined;
  path?: string | undefined;
  contentType?: string | undefined;
  contentDisposition?: string | undefined;
  cid?: string | undefined;
  encoding?: string | undefined;
}

/** sendEmail NotificationReq event */
export interface NotificationReq {
  email?: Email | undefined;
  log?: Log | undefined;
  subject?:
    | string
    | undefined;
  /** text/HTML content */
  body?:
    | string
    | undefined;
  /** / 'email', 'log', ... default == 'log' */
  transport?:
    | string
    | undefined;
  /** / specific transport provider, eg: 'console' for transport == 'log' */
  provider?: string | undefined;
  attachments: Attachment[];
  reference?: Reference | undefined;
}

export interface Email {
  /** array of to email list */
  to: string[];
  /** array of cc email list */
  cc: string[];
  /** array of bcc email list */
  bcc: string[];
  /** if set, the outgoing mail will have this replyTo header set */
  replyto?: string | undefined;
}

export interface Log {
  level?: string | undefined;
}

function createBaseAttachment(): Attachment {
  return {
    filename: undefined,
    text: undefined,
    buffer: undefined,
    path: undefined,
    contentType: undefined,
    contentDisposition: undefined,
    cid: undefined,
    encoding: undefined,
  };
}

export const Attachment = {
  encode(message: Attachment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== undefined) {
      writer.uint32(10).string(message.filename);
    }
    if (message.text !== undefined) {
      writer.uint32(18).string(message.text);
    }
    if (message.buffer !== undefined) {
      writer.uint32(26).bytes(message.buffer);
    }
    if (message.path !== undefined) {
      writer.uint32(34).string(message.path);
    }
    if (message.contentType !== undefined) {
      writer.uint32(42).string(message.contentType);
    }
    if (message.contentDisposition !== undefined) {
      writer.uint32(50).string(message.contentDisposition);
    }
    if (message.cid !== undefined) {
      writer.uint32(58).string(message.cid);
    }
    if (message.encoding !== undefined) {
      writer.uint32(66).string(message.encoding);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.buffer = reader.bytes() as Buffer;
          break;
        case 4:
          message.path = reader.string();
          break;
        case 5:
          message.contentType = reader.string();
          break;
        case 6:
          message.contentDisposition = reader.string();
          break;
        case 7:
          message.cid = reader.string();
          break;
        case 8:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attachment {
    return {
      filename: isSet(object.filename) ? String(object.filename) : undefined,
      text: isSet(object.text) ? String(object.text) : undefined,
      buffer: isSet(object.buffer) ? Buffer.from(bytesFromBase64(object.buffer)) : undefined,
      path: isSet(object.path) ? String(object.path) : undefined,
      contentType: isSet(object.contentType) ? String(object.contentType) : undefined,
      contentDisposition: isSet(object.contentDisposition) ? String(object.contentDisposition) : undefined,
      cid: isSet(object.cid) ? String(object.cid) : undefined,
      encoding: isSet(object.encoding) ? String(object.encoding) : undefined,
    };
  },

  toJSON(message: Attachment): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.text !== undefined && (obj.text = message.text);
    message.buffer !== undefined &&
      (obj.buffer = message.buffer !== undefined ? base64FromBytes(message.buffer) : undefined);
    message.path !== undefined && (obj.path = message.path);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.contentDisposition !== undefined && (obj.contentDisposition = message.contentDisposition);
    message.cid !== undefined && (obj.cid = message.cid);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },

  create(base?: DeepPartial<Attachment>): Attachment {
    return Attachment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Attachment>): Attachment {
    const message = createBaseAttachment();
    message.filename = object.filename ?? undefined;
    message.text = object.text ?? undefined;
    message.buffer = object.buffer ?? undefined;
    message.path = object.path ?? undefined;
    message.contentType = object.contentType ?? undefined;
    message.contentDisposition = object.contentDisposition ?? undefined;
    message.cid = object.cid ?? undefined;
    message.encoding = object.encoding ?? undefined;
    return message;
  },
};

function createBaseNotificationReq(): NotificationReq {
  return {
    email: undefined,
    log: undefined,
    subject: undefined,
    body: undefined,
    transport: undefined,
    provider: undefined,
    attachments: [],
    reference: undefined,
  };
}

export const NotificationReq = {
  encode(message: NotificationReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== undefined) {
      Email.encode(message.email, writer.uint32(10).fork()).ldelim();
    }
    if (message.log !== undefined) {
      Log.encode(message.log, writer.uint32(18).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      writer.uint32(26).string(message.subject);
    }
    if (message.body !== undefined) {
      writer.uint32(34).string(message.body);
    }
    if (message.transport !== undefined) {
      writer.uint32(42).string(message.transport);
    }
    if (message.provider !== undefined) {
      writer.uint32(50).string(message.provider);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.reference !== undefined) {
      Reference.encode(message.reference, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = Email.decode(reader, reader.uint32());
          break;
        case 2:
          message.log = Log.decode(reader, reader.uint32());
          break;
        case 3:
          message.subject = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.transport = reader.string();
          break;
        case 6:
          message.provider = reader.string();
          break;
        case 7:
          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          break;
        case 8:
          message.reference = Reference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotificationReq {
    return {
      email: isSet(object.email) ? Email.fromJSON(object.email) : undefined,
      log: isSet(object.log) ? Log.fromJSON(object.log) : undefined,
      subject: isSet(object.subject) ? String(object.subject) : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      transport: isSet(object.transport) ? String(object.transport) : undefined,
      provider: isSet(object.provider) ? String(object.provider) : undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Attachment.fromJSON(e)) : [],
      reference: isSet(object.reference) ? Reference.fromJSON(object.reference) : undefined,
    };
  },

  toJSON(message: NotificationReq): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email ? Email.toJSON(message.email) : undefined);
    message.log !== undefined && (obj.log = message.log ? Log.toJSON(message.log) : undefined);
    message.subject !== undefined && (obj.subject = message.subject);
    message.body !== undefined && (obj.body = message.body);
    message.transport !== undefined && (obj.transport = message.transport);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e ? Attachment.toJSON(e) : undefined);
    } else {
      obj.attachments = [];
    }
    message.reference !== undefined &&
      (obj.reference = message.reference ? Reference.toJSON(message.reference) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NotificationReq>): NotificationReq {
    return NotificationReq.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NotificationReq>): NotificationReq {
    const message = createBaseNotificationReq();
    message.email = (object.email !== undefined && object.email !== null) ? Email.fromPartial(object.email) : undefined;
    message.log = (object.log !== undefined && object.log !== null) ? Log.fromPartial(object.log) : undefined;
    message.subject = object.subject ?? undefined;
    message.body = object.body ?? undefined;
    message.transport = object.transport ?? undefined;
    message.provider = object.provider ?? undefined;
    message.attachments = object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? Reference.fromPartial(object.reference)
      : undefined;
    return message;
  },
};

function createBaseEmail(): Email {
  return { to: [], cc: [], bcc: [], replyto: undefined };
}

export const Email = {
  encode(message: Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.to) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.cc) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.bcc) {
      writer.uint32(26).string(v!);
    }
    if (message.replyto !== undefined) {
      writer.uint32(34).string(message.replyto);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Email {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to.push(reader.string());
          break;
        case 2:
          message.cc.push(reader.string());
          break;
        case 3:
          message.bcc.push(reader.string());
          break;
        case 4:
          message.replyto = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Email {
    return {
      to: Array.isArray(object?.to) ? object.to.map((e: any) => String(e)) : [],
      cc: Array.isArray(object?.cc) ? object.cc.map((e: any) => String(e)) : [],
      bcc: Array.isArray(object?.bcc) ? object.bcc.map((e: any) => String(e)) : [],
      replyto: isSet(object.replyto) ? String(object.replyto) : undefined,
    };
  },

  toJSON(message: Email): unknown {
    const obj: any = {};
    if (message.to) {
      obj.to = message.to.map((e) => e);
    } else {
      obj.to = [];
    }
    if (message.cc) {
      obj.cc = message.cc.map((e) => e);
    } else {
      obj.cc = [];
    }
    if (message.bcc) {
      obj.bcc = message.bcc.map((e) => e);
    } else {
      obj.bcc = [];
    }
    message.replyto !== undefined && (obj.replyto = message.replyto);
    return obj;
  },

  create(base?: DeepPartial<Email>): Email {
    return Email.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Email>): Email {
    const message = createBaseEmail();
    message.to = object.to?.map((e) => e) || [];
    message.cc = object.cc?.map((e) => e) || [];
    message.bcc = object.bcc?.map((e) => e) || [];
    message.replyto = object.replyto ?? undefined;
    return message;
  },
};

function createBaseLog(): Log {
  return { level: undefined };
}

export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== undefined) {
      writer.uint32(10).string(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Log {
    return { level: isSet(object.level) ? String(object.level) : undefined };
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  create(base?: DeepPartial<Log>): Log {
    return Log.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Log>): Log {
    const message = createBaseLog();
    message.level = object.level ?? undefined;
    return message;
  },
};

export type NotificationReqServiceDefinition = typeof NotificationReqServiceDefinition;
export const NotificationReqServiceDefinition = {
  name: "NotificationReqService",
  fullName: "io.restorecommerce.notification_req.NotificationReqService",
  methods: {
    /** direct notifications */
    send: {
      name: "Send",
      requestType: NotificationReq,
      requestStream: false,
      responseType: OperationStatusObj,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface NotificationReqServiceImplementation<CallContextExt = {}> {
  /** direct notifications */
  send(request: NotificationReq, context: CallContext & CallContextExt): Promise<DeepPartial<OperationStatusObj>>;
}

export interface NotificationReqServiceClient<CallOptionsExt = {}> {
  /** direct notifications */
  send(request: DeepPartial<NotificationReq>, options?: CallOptions & CallOptionsExt): Promise<OperationStatusObj>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/notification_req.proto",
    "package": "io.restorecommerce.notification_req",
    "dependency": ["io/restorecommerce/status.proto", "io/restorecommerce/reference.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Attachment",
      "field": [{
        "name": "filename",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "filename",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "text",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "text",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "buffer",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "buffer",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "path",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "path",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_type",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "contentType",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "content_disposition",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "contentDisposition",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "cid",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "cid",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "encoding",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "encoding",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_filename", "options": undefined },
        { "name": "_text", "options": undefined },
        { "name": "_buffer", "options": undefined },
        { "name": "_path", "options": undefined },
        { "name": "_content_type", "options": undefined },
        { "name": "_content_disposition", "options": undefined },
        { "name": "_cid", "options": undefined },
        { "name": "_encoding", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "NotificationReq",
      "field": [{
        "name": "email",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.notification_req.Email",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "log",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.notification_req.Log",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "log",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "body",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "body",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "transport",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "transport",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "provider",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "provider",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "attachments",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.notification_req.Attachment",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attachments",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reference",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.reference.Reference",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "reference",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "channel", "options": undefined },
        { "name": "_subject", "options": undefined },
        { "name": "_body", "options": undefined },
        { "name": "_transport", "options": undefined },
        { "name": "_provider", "options": undefined },
        { "name": "_reference", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Email",
      "field": [{
        "name": "to",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "to",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "cc",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "cc",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "bcc",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "bcc",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "replyto",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "replyto",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_replyto", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Log",
      "field": [{
        "name": "level",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "level",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_level", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "NotificationReqService",
      "method": [{
        "name": "Send",
        "inputType": ".io.restorecommerce.notification_req.NotificationReq",
        "outputType": ".io.restorecommerce.status.OperationStatusObj",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0, 2, 0],
        "span": [9, 2, 84],
        "leadingComments": " direct notifications\n",
        "trailingComments": "/ generic fallback\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [13, 0, 25, 1],
        "leadingComments": " mimics nodemailer properties for easy configuration\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [17, 2, 27],
        "leadingComments": ' the "content" may be on of the following:\n',
        "trailingComments": " for textual data\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 2],
        "span": [18, 2, 28],
        "leadingComments": "",
        "trailingComments": " for binary data, eg.: images\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [28, 0, 39, 1],
        "leadingComments": " sendEmail NotificationReq event\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [34, 2, 27],
        "leadingComments": "",
        "trailingComments": " text/HTML content\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [35, 2, 32],
        "leadingComments": "",
        "trailingComments": "/ 'email', 'log', ... default == 'log'\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [36, 2, 31],
        "leadingComments": "",
        "trailingComments": "/ specific transport provider, eg: 'console' for transport == 'log'\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 0],
        "span": [42, 2, 25],
        "leadingComments": "",
        "trailingComments": " array of to email list\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 1],
        "span": [43, 2, 26],
        "leadingComments": "",
        "trailingComments": " array of cc email list\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 2],
        "span": [44, 2, 26],
        "leadingComments": "",
        "trailingComments": " array of bcc email list\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 3],
        "span": [45, 2, 30],
        "leadingComments": "",
        "trailingComments": " if set, the outgoing mail will have this replyTo header set\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.notification_req.Attachment": Attachment,
    ".io.restorecommerce.notification_req.NotificationReq": NotificationReq,
    ".io.restorecommerce.notification_req.Email": Email,
    ".io.restorecommerce.notification_req.Log": Log,
  },
  dependencies: [protoMetadata1, protoMetadata2],
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
