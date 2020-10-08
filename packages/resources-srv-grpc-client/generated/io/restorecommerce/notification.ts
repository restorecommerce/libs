/* eslint-disable */
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  mimics nodemailer properties for easy configuration
 */
export interface Attachment {
  filename: string;
  /**
   *  the "content" may be on of the following:
   */
  text: string;
  /**
   *  for binary data, eg.: images
   */
  buffer: Buffer;
  path: string;
  contentType: string;
  contentDisposition: string;
  cid: string;
  encoding: string;
}

/**
 *  sendEmail Notification event
 */
export interface Notification {
  email?: Email | undefined;
  log?: Log | undefined;
  subject: string;
  /**
   *  text/HTML content
   */
  body: string;
  /**
   * / 'email', 'log', ... default == 'log'
   */
  transport: string;
  /**
   * / specific transport provider, eg: 'console' for transport == 'log'
   */
  provider: string;
  attachments: Attachment[];
}

export interface Email {
  /**
   *  array of to email list
   */
  to: string[];
  /**
   *  array of cc email list
   */
  cc: string[];
  /**
   *  array of bcc email list
   */
  bcc: string[];
  /**
   *  if set, the outgoing mail will have this replyTo header set
   */
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

const baseNotification: object = {
  subject: "",
  body: "",
  transport: "",
  provider: "",
};

const baseEmail: object = {
  to: "",
  cc: "",
  bcc: "",
  replyto: "",
};

const baseLog: object = {
  level: "",
};

export interface Service {

  /**
   *  direct notifications
   */
  Send(request: Notification): Promise<Empty>;

}

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
  decode(input: Uint8Array | Reader, length?: number): Attachment {
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
  decode(input: Uint8Array | Reader, length?: number): Notification {
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
};

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
  decode(input: Uint8Array | Reader, length?: number): Email {
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
};

export const Log = {
  encode(message: Log, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.level);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Log {
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
};
