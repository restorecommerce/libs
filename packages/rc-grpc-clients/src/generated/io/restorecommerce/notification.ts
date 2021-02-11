/* eslint-disable */
import { IFileDescriptorProto } from "protobufjs/ext/descriptor";
import { Writer, Reader } from "protobufjs/minimal";
import {
  Empty,
  protoMetadata as google_protobuf_empty_protoMetadata,
} from "../../google/protobuf/empty";

export const protobufPackage = "io.restorecommerce.notification";

/** mimics nodemailer properties for easy configuration */
export interface Attachment {
  filename: string;
  /** the "content" may be on of the following: */
  text: string;
  /** for binary data, eg.: images */
  buffer: Buffer;
  path: string;
  contentType: string;
  contentDisposition: string;
  cid: string;
  encoding: string;
}

/** sendEmail Notification event */
export interface Notification {
  email?: Email | undefined;
  log?: Log | undefined;
  subject: string;
  /** text/HTML content */
  body: string;
  /** / 'email', 'log', ... default == 'log' */
  transport: string;
  /** / specific transport provider, eg: 'console' for transport == 'log' */
  provider: string;
  attachments: Attachment[];
}

export interface Email {
  /** array of to email list */
  to: string[];
  /** array of cc email list */
  cc: string[];
  /** array of bcc email list */
  bcc: string[];
  /** if set, the outgoing mail will have this replyTo header set */
  replyto: string;
}

export interface Log {
  level: string;
}

const baseAttachment: object = {
  filename: "",
  text: "",
  path: "",
  contentType: "",
  contentDisposition: "",
  cid: "",
  encoding: "",
};

export const Attachment = {
  encode(message: Attachment, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.filename);
    writer.uint32(18).string(message.text);
    writer.uint32(26).bytes(message.buffer);
    writer.uint32(34).string(message.path);
    writer.uint32(42).string(message.contentType);
    writer.uint32(50).string(message.contentDisposition);
    writer.uint32(58).string(message.cid);
    writer.uint32(66).string(message.encoding);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttachment } as Attachment;
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
    const message = { ...baseAttachment } as Attachment;
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = String(object.filename);
    } else {
      message.filename = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    if (object.buffer !== undefined && object.buffer !== null) {
      message.buffer = Buffer.from(bytesFromBase64(object.buffer));
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (
      object.contentDisposition !== undefined &&
      object.contentDisposition !== null
    ) {
      message.contentDisposition = String(object.contentDisposition);
    } else {
      message.contentDisposition = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = String(object.encoding);
    } else {
      message.encoding = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Attachment>): Attachment {
    const message = { ...baseAttachment } as Attachment;
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename;
    } else {
      message.filename = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    if (object.buffer !== undefined && object.buffer !== null) {
      message.buffer = object.buffer;
    } else {
      message.buffer = new Buffer(0);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (
      object.contentDisposition !== undefined &&
      object.contentDisposition !== null
    ) {
      message.contentDisposition = object.contentDisposition;
    } else {
      message.contentDisposition = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    } else {
      message.encoding = "";
    }
    return message;
  },

  toJSON(message: Attachment): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.text !== undefined && (obj.text = message.text);
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(
        message.buffer !== undefined ? message.buffer : new Buffer(0)
      ));
    message.path !== undefined && (obj.path = message.path);
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.contentDisposition !== undefined &&
      (obj.contentDisposition = message.contentDisposition);
    message.cid !== undefined && (obj.cid = message.cid);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },
};

const baseNotification: object = {
  subject: "",
  body: "",
  transport: "",
  provider: "",
};

export const Notification = {
  encode(message: Notification, writer: Writer = Writer.create()): Writer {
    if (message.email !== undefined) {
      Email.encode(message.email, writer.uint32(10).fork()).ldelim();
    }
    if (message.log !== undefined) {
      Log.encode(message.log, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.subject);
    writer.uint32(34).string(message.body);
    writer.uint32(42).string(message.transport);
    writer.uint32(50).string(message.provider);
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotification } as Notification;
    message.attachments = [];
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    const message = { ...baseNotification } as Notification;
    message.attachments = [];
    if (object.email !== undefined && object.email !== null) {
      message.email = Email.fromJSON(object.email);
    } else {
      message.email = undefined;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = Log.fromJSON(object.log);
    } else {
      message.log = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.transport !== undefined && object.transport !== null) {
      message.transport = String(object.transport);
    } else {
      message.transport = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(Attachment.fromJSON(e));
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    message.attachments = [];
    if (object.email !== undefined && object.email !== null) {
      message.email = Email.fromPartial(object.email);
    } else {
      message.email = undefined;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = Log.fromPartial(object.log);
    } else {
      message.log = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.transport !== undefined && object.transport !== null) {
      message.transport = object.transport;
    } else {
      message.transport = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(Attachment.fromPartial(e));
      }
    }
    return message;
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.email !== undefined &&
      (obj.email = message.email ? Email.toJSON(message.email) : undefined);
    message.log !== undefined &&
      (obj.log = message.log ? Log.toJSON(message.log) : undefined);
    message.subject !== undefined && (obj.subject = message.subject);
    message.body !== undefined && (obj.body = message.body);
    message.transport !== undefined && (obj.transport = message.transport);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    return obj;
  },
};

const baseEmail: object = { to: "", cc: "", bcc: "", replyto: "" };

export const Email = {
  encode(message: Email, writer: Writer = Writer.create()): Writer {
    for (const v of message.to) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.cc) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.bcc) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).string(message.replyto);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Email {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmail } as Email;
    message.to = [];
    message.cc = [];
    message.bcc = [];
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
    const message = { ...baseEmail } as Email;
    message.to = [];
    message.cc = [];
    message.bcc = [];
    if (object.to !== undefined && object.to !== null) {
      for (const e of object.to) {
        message.to.push(String(e));
      }
    }
    if (object.cc !== undefined && object.cc !== null) {
      for (const e of object.cc) {
        message.cc.push(String(e));
      }
    }
    if (object.bcc !== undefined && object.bcc !== null) {
      for (const e of object.bcc) {
        message.bcc.push(String(e));
      }
    }
    if (object.replyto !== undefined && object.replyto !== null) {
      message.replyto = String(object.replyto);
    } else {
      message.replyto = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Email>): Email {
    const message = { ...baseEmail } as Email;
    message.to = [];
    message.cc = [];
    message.bcc = [];
    if (object.to !== undefined && object.to !== null) {
      for (const e of object.to) {
        message.to.push(e);
      }
    }
    if (object.cc !== undefined && object.cc !== null) {
      for (const e of object.cc) {
        message.cc.push(e);
      }
    }
    if (object.bcc !== undefined && object.bcc !== null) {
      for (const e of object.bcc) {
        message.bcc.push(e);
      }
    }
    if (object.replyto !== undefined && object.replyto !== null) {
      message.replyto = object.replyto;
    } else {
      message.replyto = "";
    }
    return message;
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
};

const baseLog: object = { level: "" };

export const Log = {
  encode(message: Log, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.level);
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLog } as Log;
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
    const message = { ...baseLog } as Log;
    if (object.level !== undefined && object.level !== null) {
      message.level = String(object.level);
    } else {
      message.level = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Log>): Log {
    const message = { ...baseLog } as Log;
    if (object.level !== undefined && object.level !== null) {
      message.level = object.level;
    } else {
      message.level = "";
    }
    return message;
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },
};

export interface Service {
  /** direct notifications */
  Send(request: Notification): Promise<Empty>;
}

export interface ProtoMetadata {
  fileDescriptor: IFileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: {
    dependency: ["google/protobuf/empty.proto"],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "Attachment",
        field: [
          {
            name: "filename",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "filename",
          },
          {
            name: "text",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "text",
          },
          {
            name: "buffer",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_BYTES",
            jsonName: "buffer",
          },
          {
            name: "path",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "path",
          },
          {
            name: "content_type",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "contentType",
          },
          {
            name: "content_disposition",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "contentDisposition",
          },
          {
            name: "cid",
            number: 7,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "cid",
          },
          {
            name: "encoding",
            number: 8,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "encoding",
          },
        ],
      },
      {
        name: "Notification",
        field: [
          {
            name: "email",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.notification.Email",
            oneofIndex: 0,
            jsonName: "email",
          },
          {
            name: "log",
            number: 2,
            label: "LABEL_OPTIONAL",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.notification.Log",
            oneofIndex: 0,
            jsonName: "log",
          },
          {
            name: "subject",
            number: 3,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "subject",
          },
          {
            name: "body",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "body",
          },
          {
            name: "transport",
            number: 5,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "transport",
          },
          {
            name: "provider",
            number: 6,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "provider",
          },
          {
            name: "attachments",
            number: 7,
            label: "LABEL_REPEATED",
            type: "TYPE_MESSAGE",
            typeName: ".io.restorecommerce.notification.Attachment",
            jsonName: "attachments",
          },
        ],
        oneofDecl: [{ name: "channel" }],
      },
      {
        name: "Email",
        field: [
          {
            name: "to",
            number: 1,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "to",
          },
          {
            name: "cc",
            number: 2,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "cc",
          },
          {
            name: "bcc",
            number: 3,
            label: "LABEL_REPEATED",
            type: "TYPE_STRING",
            jsonName: "bcc",
          },
          {
            name: "replyto",
            number: 4,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "replyto",
          },
        ],
      },
      {
        name: "Log",
        field: [
          {
            name: "level",
            number: 1,
            label: "LABEL_OPTIONAL",
            type: "TYPE_STRING",
            jsonName: "level",
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
            name: "Send",
            inputType: ".io.restorecommerce.notification.Notification",
            outputType: ".google.protobuf.Empty",
          },
        ],
      },
    ],
    extension: [],
    name: "io/restorecommerce/notification.proto",
    package: "io.restorecommerce.notification",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0, 2, 0],
          span: [8, 2, 58],
          leadingComments: " direct notifications\n",
          trailingComments: "/ generic fallback\n",
        },
        {
          path: [4, 0],
          span: [12, 0, 24, 1],
          leadingComments:
            " mimics nodemailer properties for easy configuration\n",
        },
        {
          path: [4, 0, 2, 1],
          span: [16, 2, 18],
          leadingComments: ' the "content" may be on of the following:\n',
          trailingComments: " for textual data\n",
        },
        {
          path: [4, 0, 2, 2],
          span: [17, 2, 19],
          trailingComments: " for binary data, eg.: images\n",
        },
        {
          path: [4, 1],
          span: [27, 0, 37, 1],
          leadingComments: " sendEmail Notification event\n",
        },
        {
          path: [4, 1, 2, 3],
          span: [33, 2, 18],
          trailingComments: " text/HTML content\n",
        },
        {
          path: [4, 1, 2, 4],
          span: [34, 2, 23],
          trailingComments: "/ 'email', 'log', ... default == 'log'\n",
        },
        {
          path: [4, 1, 2, 5],
          span: [35, 2, 22],
          trailingComments:
            "/ specific transport provider, eg: 'console' for transport == 'log'\n",
        },
        {
          path: [4, 2, 2, 0],
          span: [40, 2, 25],
          trailingComments: " array of to email list\n",
        },
        {
          path: [4, 2, 2, 1],
          span: [41, 2, 26],
          trailingComments: " array of cc email list\n",
        },
        {
          path: [4, 2, 2, 2],
          span: [42, 2, 26],
          trailingComments: " array of bcc email list\n",
        },
        {
          path: [4, 2, 2, 3],
          span: [43, 2, 21],
          trailingComments:
            " if set, the outgoing mail will have this replyTo header set\n",
        },
      ],
    },
    syntax: "proto3",
  } as any,
  references: {
    ".io.restorecommerce.notification.Attachment": Attachment,
    ".io.restorecommerce.notification.Notification": Notification,
    ".io.restorecommerce.notification.Email": Email,
    ".io.restorecommerce.notification.Log": Log,
  },
  dependencies: [google_protobuf_empty_protoMetadata],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw new Error("Unable to locate global object");
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
