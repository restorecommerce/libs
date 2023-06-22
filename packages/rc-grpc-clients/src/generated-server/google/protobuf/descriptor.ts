/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";

export const protobufPackage = "google.protobuf";

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}

/** / Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** / file name, relative to root of source tree */
  name: string;
  /** / e.g. "foo", "foo.bar", etc. */
  package: string;
  /** / Names of files imported by this file. */
  dependency: string[];
  /** / Indexes of the public imported files in the dependency list above. */
  public_dependency: number[];
  /**
   * / Indexes of the weak imported files in the dependency list.
   * / For Google-internal migration only. Do not use.
   */
  weak_dependency: number[];
  /** / All top-level definitions in this file. */
  message_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  /**
   * / This field contains optional information about the original source code.
   * / You may safely remove this entire field without harming runtime
   * / functionality of the descriptors -- the information is needed only by
   * / development tools.
   */
  source_code_info?: SourceCodeInfo;
  /**
   * / The syntax of the proto file.
   * / The supported values are "proto2" and "proto3".
   */
  syntax: string;
}

/** / Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nested_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  extension_range: DescriptorProto_ExtensionRange[];
  oneof_decl: OneofDescriptorProto[];
  options?: MessageOptions;
  reserved_range: DescriptorProto_ReservedRange[];
  /**
   * / Reserved field names, which may not be used by fields in the same message.
   * / A given name may only be reserved once.
   */
  reserved_name: string[];
}

export interface DescriptorProto_ExtensionRange {
  start: number;
  end: number;
}

/**
 * / Range of reserved tag numbers. Reserved tag numbers may not be used by
 * / fields or extension ranges in the same message. Reserved ranges may
 * / not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** / Inclusive. */
  start: number;
  /** / Exclusive. */
  end: number;
}

/** / Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * / If type_name is set, this need not be set.  If both this and type_name
   * / are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * / For message and enum types, this is the name of the type.  If the name
   * / starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * / rules are used to find the type (i.e. first the nested types within this
   * / message are searched, then within the parent, on up to the root
   * / namespace).
   */
  type_name: string;
  /**
   * / For extensions, this is the name of the type being extended.  It is
   * / resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * / For numeric types, contains the original text representation of the value.
   * / For booleans, "true" or "false".
   * / For strings, contains the default text contents (not escaped in any way).
   * / For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * / TODO(kenton):  Base-64 encode?
   */
  default_value: string;
  /**
   * / If set, gives the index of a oneof in the containing type's oneof_decl
   * / list.  This field is a member of that oneof.
   */
  oneof_index: number;
  /**
   * / JSON name of this field. The value is set by protocol compiler. If the
   * / user has set a "json_name" option on this field, that option's value
   * / will be used. Otherwise, it's deduced from the field's name by converting
   * / it to camelCase.
   */
  json_name: string;
  options?: FieldOptions;
}

export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - / 0 is reserved for errors.
   * / Order is weird for historical reasons.
   */
  TYPE_DOUBLE = "TYPE_DOUBLE",
  TYPE_FLOAT = "TYPE_FLOAT",
  /**
   * TYPE_INT64 - / Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * / negative values are likely.
   */
  TYPE_INT64 = "TYPE_INT64",
  TYPE_UINT64 = "TYPE_UINT64",
  /**
   * TYPE_INT32 - / Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * / negative values are likely.
   */
  TYPE_INT32 = "TYPE_INT32",
  TYPE_FIXED64 = "TYPE_FIXED64",
  TYPE_FIXED32 = "TYPE_FIXED32",
  TYPE_BOOL = "TYPE_BOOL",
  TYPE_STRING = "TYPE_STRING",
  /** TYPE_GROUP - / Tag-delimited aggregate. */
  TYPE_GROUP = "TYPE_GROUP",
  /** TYPE_MESSAGE - / Length-delimited aggregate. */
  TYPE_MESSAGE = "TYPE_MESSAGE",
  /** TYPE_BYTES - / New in version 2. */
  TYPE_BYTES = "TYPE_BYTES",
  TYPE_UINT32 = "TYPE_UINT32",
  TYPE_ENUM = "TYPE_ENUM",
  TYPE_SFIXED32 = "TYPE_SFIXED32",
  TYPE_SFIXED64 = "TYPE_SFIXED64",
  /** TYPE_SINT32 - / Uses ZigZag encoding. */
  TYPE_SINT32 = "TYPE_SINT32",
  /** TYPE_SINT64 - / Uses ZigZag encoding. */
  TYPE_SINT64 = "TYPE_SINT64",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fieldDescriptorProto_TypeToNumber(object: FieldDescriptorProto_Type): number {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return 1;
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return 2;
    case FieldDescriptorProto_Type.TYPE_INT64:
      return 3;
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return 4;
    case FieldDescriptorProto_Type.TYPE_INT32:
      return 5;
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return 6;
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return 7;
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return 8;
    case FieldDescriptorProto_Type.TYPE_STRING:
      return 9;
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return 10;
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return 11;
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return 12;
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return 13;
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return 14;
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return 15;
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return 16;
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return 17;
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return 18;
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - / 0 is reserved for errors */
  LABEL_OPTIONAL = "LABEL_OPTIONAL",
  LABEL_REQUIRED = "LABEL_REQUIRED",
  /** LABEL_REPEATED - / TODO(sanjay): Should we add LABEL_MAP? */
  LABEL_REPEATED = "LABEL_REPEATED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fieldDescriptorProto_LabelToNumber(object: FieldDescriptorProto_Label): number {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return 1;
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return 2;
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return 3;
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** / Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
}

/** / Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
}

/** / Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}

/** / Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}

/** / Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * / Input and output type names.  These are resolved in the same way as
   * / FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type: string;
  output_type: string;
  options?: MethodOptions;
  /** / Identifies if client streams multiple client messages */
  client_streaming: boolean;
  /** / Identifies if server streams multiple server messages */
  server_streaming: boolean;
}

export interface FileOptions {
  /**
   * / Sets the Java package where classes generated from this .proto will be
   * / placed.  By default, the proto package is used, but this is often
   * / inappropriate because proto packages do not normally start with backwards
   * / domain names.
   */
  java_package: string;
  /**
   * / If set, all the classes from the .proto file are wrapped in a single
   * / outer class with the given name.  This applies to both Proto1
   * / (equivalent to the old "--one_java_file" option) and Proto2 (where
   * / a .proto always translates to a single class, but you may want to
   * / explicitly choose the class name).
   */
  java_outer_classname: string;
  /**
   * / If set true, then the Java code generator will generate a separate .java
   * / file for each top-level message, enum, and service defined in the .proto
   * / file.  Thus, these types will *not* be nested inside the outer class
   * / named by java_outer_classname.  However, the outer class will still be
   * / generated to contain the file's getDescriptor() method as well as any
   * / top-level extensions defined in the file.
   */
  java_multiple_files: boolean;
  /**
   * / If set true, then the Java code generator will generate equals() and
   * / hashCode() methods for all messages defined in the .proto file.
   * / This increases generated code size, potentially substantially for large
   * / protos, which may harm a memory-constrained application.
   * / - In the full runtime this is a speed optimization, as the
   * / AbstractMessage base class includes reflection-based implementations of
   * / these methods.
   * / - In the lite runtime, setting this option changes the semantics of
   * / equals() and hashCode() to more closely match those of the full runtime;
   * / the generated methods compute their results based on field values rather
   * / than object identity. (Implementations should not assume that hashcodes
   * / will be consistent across runtimes or versions of the protocol compiler.)
   */
  java_generate_equals_and_hash: boolean;
  /**
   * / If set true, then the Java2 code generator will generate code that
   * / throws an exception whenever an attempt is made to assign a non-UTF-8
   * / byte sequence to a string field.
   * / Message reflection will do the same.
   * / However, an extension field still accepts non-UTF-8 byte sequences.
   * / This option has no effect on when used with the lite runtime.
   */
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  /**
   * / Sets the Go package where structs generated from this .proto will be
   * / placed. If omitted, the Go package will be derived from the following:
   * /   - The basename of the package import path, if provided.
   * /   - Otherwise, the package statement in the .proto file, if present.
   * /   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package: string;
  /**
   * / Should generic services be generated in each language?  "Generic" services
   * / are not specific to any particular RPC system.  They are generated by the
   * / main code generators in each language (without additional plugins).
   * / Generic services were the only kind of service generation supported by
   * / early versions of google.protobuf.
   *
   * / Generic services are now considered deprecated in favor of using plugins
   * / that generate code specific to your particular RPC system.  Therefore,
   * / these default to false.  Old code which depends on generic services should
   * / explicitly set them to true.
   */
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  /**
   * / Is this file deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for everything in the file, or it will be completely ignored; in the very
   * / least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * / Enables the use of arenas for the proto messages in this file. This applies
   * / only to generated classes for C++.
   */
  cc_enable_arenas: boolean;
  /**
   * / Sets the objective c class prefix which is prepended to all objective c
   * / generated classes from this .proto. There is no default.
   */
  objc_class_prefix: string;
  /** / Namespace for generated classes; defaults to the package. */
  csharp_namespace: string;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

/** / Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - / Generate complete code for parsing, serialization, */
  SPEED = "SPEED",
  /** CODE_SIZE - / etc. */
  CODE_SIZE = "CODE_SIZE",
  /** LITE_RUNTIME - / Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = "LITE_RUNTIME",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}

export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fileOptions_OptimizeModeToNumber(object: FileOptions_OptimizeMode): number {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return 1;
    case FileOptions_OptimizeMode.CODE_SIZE:
      return 2;
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return 3;
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface MessageOptions {
  /**
   * / Set true to use the old proto1 MessageSet wire format for extensions.
   * / This is provided for backwards-compatibility with the MessageSet wire
   * / format.  You should not use this for any other reason:  It's less
   * / efficient, has fewer features, and is more complicated.
   *
   * / The message must be defined exactly as follows:
   * /   message Foo {
   * /     option message_set_wire_format = true;
   * /     extensions 4 to max;
   * /   }
   * / Note that the message cannot have any defined fields; MessageSets only
   * / have extensions.
   *
   * / All extensions of your type must be singular messages; e.g. they cannot
   * / be int32s, enums, or repeated messages.
   *
   * / Because this is an option, the above two restrictions are not enforced by
   * / the protocol compiler.
   */
  message_set_wire_format: boolean;
  /**
   * / Disables the generation of the standard "descriptor()" accessor, which can
   * / conflict with a field of the same name.  This is meant to make migration
   * / from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor: boolean;
  /**
   * / Is this message deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for the message, or it will be completely ignored; in the very least,
   * / this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * / Whether the message is an automatically generated map entry type for the
   * / maps field.
   *
   * / For maps fields:
   * /     map<KeyType, ValueType> map_field = 1;
   * / The parsed descriptor looks like:
   * /     message MapFieldEntry {
   * /         option map_entry = true;
   * /         optional KeyType key = 1;
   * /         optional ValueType value = 2;
   * /     }
   * /     repeated MapFieldEntry map_field = 1;
   *
   * / Implementations may choose not to generate the map_entry=true message, but
   * / use a native map in the target language to hold the keys and values.
   * / The reflection APIs in such implementions still need to work as
   * / if the field is a repeated message field.
   *
   * / NOTE: Do not set the option in .proto files. Always use the maps syntax
   * / instead. The option should only be implicitly set by the proto compiler
   * / parser.
   */
  map_entry: boolean;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface FieldOptions {
  /**
   * / The ctype option instructs the C++ code generator to use a different
   * / representation of the field than it normally would.  See the specific
   * / options below.  This option is not yet implemented in the open source
   * / release -- sorry, we'll try to include it in a future version!
   */
  ctype: FieldOptions_CType;
  /**
   * / The packed option can be enabled for repeated primitive fields to enable
   * / a more efficient representation on the wire. Rather than repeatedly
   * / writing the tag and type for each element, the entire array is encoded as
   * / a single length-delimited blob. In proto3, only explicit setting it to
   * / false will avoid using packed encoding.
   */
  packed: boolean;
  /**
   * / The jstype option determines the JavaScript type used for values of the
   * / field.  The option is permitted only for 64 bit integral and fixed types
   * / (int64, uint64, sint64, fixed64, sfixed64).  By default these types are
   * / represented as JavaScript strings.  This avoids loss of precision that can
   * / happen when a large value is converted to a floating point JavaScript
   * / numbers.  Specifying JS_NUMBER for the jstype causes the generated
   * / JavaScript code to use the JavaScript "number" type instead of strings.
   * / This option is an enum to permit additional types to be added,
   * / e.g. goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * / Should this field be parsed lazily?  Lazy applies only to message-type
   * / fields.  It means that when the outer message is initially parsed, the
   * / inner message's contents will not be parsed but instead stored in encoded
   * / form.  The inner message will actually be parsed when it is first accessed.
   *
   * / This is only a hint.  Implementations are free to choose whether to use
   * / eager or lazy parsing regardless of the value of this option.  However,
   * / setting this option true suggests that the protocol author believes that
   * / using lazy parsing on this field is worth the additional bookkeeping
   * / overhead typically needed to implement it.
   *
   * / This option does not affect the public interface of any generated code;
   * / all method signatures remain the same.  Furthermore, thread-safety of the
   * / interface is not affected by this option; const methods remain safe to
   * / call from multiple threads concurrently, while non-const methods continue
   * / to require exclusive access.
   *
   * / Note that implementations may choose not to check required fields within
   * / a lazy sub-message.  That is, calling IsInitialized() on the outher message
   * / may return true even if the inner message has missing required fields.
   * / This is necessary because otherwise the inner message would have to be
   * / parsed in order to perform the check, defeating the purpose of lazy
   * / parsing.  An implementation which chooses not to check required fields
   * / must be consistent about it.  That is, for any particular sub-message, the
   * / implementation must either *always* check its required fields, or *never*
   * / check its required fields, regardless of whether or not the message has
   * / been parsed.
   */
  lazy: boolean;
  /**
   * / Is this field deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for accessors, or it will be completely ignored; in the very least, this
   * / is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** / For Google-internal migration only. Do not use. */
  weak: boolean;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export enum FieldOptions_CType {
  /** STRING - / Default mode. */
  STRING = "STRING",
  CORD = "CORD",
  STRING_PIECE = "STRING_PIECE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}

export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fieldOptions_CTypeToNumber(object: FieldOptions_CType): number {
  switch (object) {
    case FieldOptions_CType.STRING:
      return 0;
    case FieldOptions_CType.CORD:
      return 1;
    case FieldOptions_CType.STRING_PIECE:
      return 2;
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum FieldOptions_JSType {
  /** JS_NORMAL - / Use the default type. */
  JS_NORMAL = "JS_NORMAL",
  /** JS_STRING - / Use JavaScript strings. */
  JS_STRING = "JS_STRING",
  /** JS_NUMBER - / Use JavaScript numbers. */
  JS_NUMBER = "JS_NUMBER",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}

export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fieldOptions_JSTypeToNumber(object: FieldOptions_JSType): number {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return 0;
    case FieldOptions_JSType.JS_STRING:
      return 1;
    case FieldOptions_JSType.JS_NUMBER:
      return 2;
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface EnumOptions {
  /**
   * / Set this option to true to allow mapping different tag names to the same
   * / value.
   */
  allow_alias: boolean;
  /**
   * / Is this enum deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for the enum, or it will be completely ignored; in the very least, this
   * / is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface EnumValueOptions {
  /**
   * / Is this enum value deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for the enum value, or it will be completely ignored; in the very least,
   * / this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface ServiceOptions {
  /**
   * / Is this service deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for the service, or it will be completely ignored; in the very least,
   * / this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

export interface MethodOptions {
  /**
   * / Is this method deprecated?
   * / Depending on the target platform, this can emit Deprecated annotations
   * / for the method, or it will be completely ignored; in the very least,
   * / this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  /** / The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}

/**
 * / A message representing a option the parser does not recognize. This only
 * / appears in options protos created by the compiler::Parser class.
 * / DescriptorPool resolves these when building Descriptor objects. Therefore,
 * / options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * / or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * / in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * / The value of the uninterpreted option, in whatever type the tokenizer
   * / identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value: string;
  positive_int_value: number;
  negative_int_value: number;
  double_value: number;
  string_value: Buffer;
  aggregate_value: string;
}

/**
 * / The name of the uninterpreted option.  Each string represents a segment in
 * / a dot-separated name.  is_extension is true iff a segment represents an
 * / extension (denoted with parentheses in options specs in .proto files).
 * / E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * / "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePart {
  name_part: string;
  is_extension: boolean;
}

/**
 * / Encapsulates information about the original source file from which a
 * / FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * / A Location identifies a piece of source code in a .proto file which
   * / corresponds to a particular definition.  This information is intended
   * / to be useful to IDEs, code indexers, documentation generators, and similar
   * / tools.
   *
   * / For example, say we have a file like:
   * /   message Foo {
   * /     optional string foo = 1;
   * /   }
   * / Let's look at just the field definition:
   * /   optional string foo = 1;
   * /   ^       ^^     ^^  ^  ^^^
   * /   a       bc     de  f  ghi
   * / We have the following locations:
   * /   span   path               represents
   * /   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   * /   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   * /   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   * /   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   * /   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * / Notes:
   * / - A location may refer to a repeated field itself (i.e. not to any
   * /   particular index within it).  This is used whenever a set of elements are
   * /   logically enclosed in a single code segment.  For example, an entire
   * /   extend block (possibly containing multiple extension definitions) will
   * /   have an outer location whose path refers to the "extensions" repeated
   * /   field without an index.
   * / - Multiple locations may have the same path.  This happens when a single
   * /   logical declaration is spread out across multiple places.  The most
   * /   obvious example is the "extend" block again -- there may be multiple
   * /   extend blocks in the same scope, each of which will have the same path.
   * / - A location's span is not always a subset of its parent's span.  For
   * /   example, the "extendee" of an extension declaration appears at the
   * /   beginning of the "extend" block and is shared by all extensions within
   * /   the block.
   * / - Just because a location's span is a subset of some other location's span
   * /   does not mean that it is a descendent.  For example, a "group" defines
   * /   both a type and a field in a single declaration.  Thus, the locations
   * /   corresponding to the type and field and their components will overlap.
   * / - Code which tries to interpret locations should probably be designed to
   * /   ignore those that it doesn't understand, as more types of locations could
   * /   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}

export interface SourceCodeInfo_Location {
  /**
   * / Identifies which part of the FileDescriptorProto was defined at this
   * / location.
   *
   * / Each element is a field number or an index.  They form a path from
   * / the root FileDescriptorProto to the place where the definition.  For
   * / example, this path:
   * /   [ 4, 3, 2, 7, 1 ]
   * / refers to:
   * /   file.message_type(3)  /// 4, 3
   * /       .field(7)         /// 2, 7
   * /       .name()           /// 1
   * / This is because FileDescriptorProto.message_type has field number 4:
   * /   repeated DescriptorProto message_type = 4;
   * / and DescriptorProto.field has field number 2:
   * /   repeated FieldDescriptorProto field = 2;
   * / and FieldDescriptorProto.name has field number 1:
   * /   optional string name = 1;
   *
   * / Thus, the above path gives the location of a field name.  If we removed
   * / the last element:
   * /   [ 4, 3, 2, 7 ]
   * / this path refers to the whole field declaration (from the beginning
   * / of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * / Always has exactly three or four elements: start line, start column,
   * / end line (optional, otherwise assumed same as start line), end column.
   * / These are packed into a single field for efficiency.  Note that line
   * / and column numbers are zero-based -- typically you will want to add
   * / 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * / If this SourceCodeInfo represents a complete declaration, these are any
   * / comments appearing before and after the declaration which appear to be
   * / attached to the declaration.
   *
   * / A series of line comments appearing on consecutive lines, with no other
   * / tokens appearing on those lines, will be treated as a single comment.
   *
   * / leading_detached_comments will keep paragraphs of comments that appear
   * / before (but not connected to) the current element. Each paragraph,
   * / separated by empty lines, will be one comment element in the repeated
   * / field.
   *
   * / Only the comment content is provided; comment markers (e.g. //) are
   * / stripped out.  For block comments, leading whitespace and an asterisk
   * / will be stripped from the beginning of each line other than the first.
   * / Newlines are included in the output.
   *
   * / Examples:
   *
   * /   optional int32 foo = 1;  /// Comment attached to foo.
   * /   /// Comment attached to bar.
   * /   optional int32 bar = 2;
   *
   * /   optional string baz = 3;
   * /   /// Comment attached to baz.
   * /   /// Another line attached to baz.
   *
   * /   /// Comment attached to qux.
   * /   //
   * /   /// Another line attached to qux.
   * /   optional double qux = 4;
   *
   * /   /// Detached comment for corge. This is not leading or trailing comments
   * /   /// to qux or corge because there are blank lines separating it from
   * /   /// both.
   *
   * /   /// Detached comment for corge paragraph 2.
   *
   * /   optional string corge = 5;
   * /   /* Block comment attached
   * /    * to corge.  Leading asterisks
   * /    * will be removed. * /
   * /   /* Block comment attached to
   * /    * grault. * /
   * /   optional int32 grault = 6;
   *
   * /   /// ignored detached comments.
   */
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}

/**
 * / Describes the relationship between generated code and its original source
 * / file. A GeneratedCodeInfo message is associated with only one generated
 * / source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * / An Annotation connects some span of text in generated code to an element
   * / of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}

export interface GeneratedCodeInfo_Annotation {
  /**
   * / Identifies the element in the original source .proto file. This field
   * / is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** / Identifies the filesystem path to the original source .proto. */
  source_file: string;
  /**
   * / Identifies the starting offset in bytes in the generated code
   * / that relates to the identified object.
   */
  begin: number;
  /**
   * / Identifies the ending offset in bytes in the generated code that
   * / relates to the identified offset. The end offset should be one past
   * / the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
}

function createBaseFileDescriptorSet(): FileDescriptorSet {
  return { file: [] };
}

export const FileDescriptorSet = {
  encode(message: FileDescriptorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorSet {
    return { file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromJSON(e)) : [] };
  },

  toJSON(message: FileDescriptorSet): unknown {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map((e) => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    return FileDescriptorSet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    public_dependency: [],
    weak_dependency: [],
    message_type: [],
    enum_type: [],
    service: [],
    extension: [],
    options: undefined,
    source_code_info: undefined,
    syntax: "",
  };
}

export const FileDescriptorProto = {
  encode(message: FileDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.public_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weak_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.message_type) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.source_code_info !== undefined) {
      SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.package = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dependency.push(reader.string());
          continue;
        case 10:
          if (tag === 80) {
            message.public_dependency.push(reader.int32());

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.public_dependency.push(reader.int32());
            }

            continue;
          }

          break;
        case 11:
          if (tag === 88) {
            message.weak_dependency.push(reader.int32());

            continue;
          }

          if (tag === 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weak_dependency.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.message_type.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FileOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.syntax = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      package: isSet(object.package) ? String(object.package) : "",
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => String(e)) : [],
      public_dependency: Array.isArray(object?.public_dependency)
        ? object.public_dependency.map((e: any) => Number(e))
        : [],
      weak_dependency: Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => Number(e)) : [],
      message_type: Array.isArray(object?.message_type)
        ? object.message_type.map((e: any) => DescriptorProto.fromJSON(e))
        : [],
      enum_type: Array.isArray(object?.enum_type)
        ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e))
        : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e)) : [],
      extension: Array.isArray(object?.extension)
        ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : [],
      options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
      source_code_info: isSet(object.source_code_info) ? SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
      syntax: isSet(object.syntax) ? String(object.syntax) : "",
    };
  },

  toJSON(message: FileDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map((e) => e);
    } else {
      obj.dependency = [];
    }
    if (message.public_dependency) {
      obj.public_dependency = message.public_dependency.map((e) => Math.round(e));
    } else {
      obj.public_dependency = [];
    }
    if (message.weak_dependency) {
      obj.weak_dependency = message.weak_dependency.map((e) => Math.round(e));
    } else {
      obj.weak_dependency = [];
    }
    if (message.message_type) {
      obj.message_type = message.message_type.map((e) => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.message_type = [];
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map((e) => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) => e ? ServiceDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
    message.source_code_info !== undefined &&
      (obj.source_code_info = message.source_code_info ? SourceCodeInfo.toJSON(message.source_code_info) : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    return obj;
  },

  create(base?: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    return FileDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map((e) => e) || [];
    message.public_dependency = object.public_dependency?.map((e) => e) || [];
    message.weak_dependency = object.weak_dependency?.map((e) => e) || [];
    message.message_type = object.message_type?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map((e) => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? FileOptions.fromPartial(object.options)
      : undefined;
    message.source_code_info = (object.source_code_info !== undefined && object.source_code_info !== null)
      ? SourceCodeInfo.fromPartial(object.source_code_info)
      : undefined;
    message.syntax = object.syntax ?? "";
    return message;
  },
};

function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nested_type: [],
    enum_type: [],
    extension_range: [],
    oneof_decl: [],
    options: undefined,
    reserved_range: [],
    reserved_name: [],
  };
}

export const DescriptorProto = {
  encode(message: DescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nested_type) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extension_range) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneof_decl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nested_type.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extension_range.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.oneof_decl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = MessageOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.reserved_range.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.reserved_name.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
      extension: Array.isArray(object?.extension)
        ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : [],
      nested_type: Array.isArray(object?.nested_type)
        ? object.nested_type.map((e: any) => DescriptorProto.fromJSON(e))
        : [],
      enum_type: Array.isArray(object?.enum_type)
        ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e))
        : [],
      extension_range: Array.isArray(object?.extension_range)
        ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e))
        : [],
      oneof_decl: Array.isArray(object?.oneof_decl)
        ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromJSON(e))
        : [],
      options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range)
        ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e))
        : [],
      reserved_name: Array.isArray(object?.reserved_name)
        ? object.reserved_name.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map((e) => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nested_type) {
      obj.nested_type = message.nested_type.map((e) => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.nested_type = [];
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map((e) => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.extension_range) {
      obj.extension_range = message.extension_range.map((e) =>
        e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined
      );
    } else {
      obj.extension_range = [];
    }
    if (message.oneof_decl) {
      obj.oneof_decl = message.oneof_decl.map((e) => e ? OneofDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.oneof_decl = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map((e) => e ? DescriptorProto_ReservedRange.toJSON(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map((e) => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },

  create(base?: DeepPartial<DescriptorProto>): DescriptorProto {
    return DescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.nested_type = object.nested_type?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.extension_range = object.extension_range?.map((e) => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneof_decl = object.oneof_decl?.map((e) => OneofDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? MessageOptions.fromPartial(object.options)
      : undefined;
    message.reserved_range = object.reserved_range?.map((e) => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reserved_name = object.reserved_name?.map((e) => e) || [];
    return message;
  },
};

function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return { start: 0, end: 0 };
}

export const DescriptorProto_ExtensionRange = {
  encode(message: DescriptorProto_ExtensionRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto_ExtensionRange {
    return { start: isSet(object.start) ? Number(object.start) : 0, end: isSet(object.end) ? Number(object.end) : 0 };
  },

  toJSON(message: DescriptorProto_ExtensionRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },

  create(base?: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return { start: 0, end: 0 };
}

export const DescriptorProto_ReservedRange = {
  encode(message: DescriptorProto_ReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DescriptorProto_ReservedRange {
    return { start: isSet(object.start) ? Number(object.start) : 0, end: isSet(object.end) ? Number(object.end) : 0 };
  },

  toJSON(message: DescriptorProto_ReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },

  create(base?: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: FieldDescriptorProto_Label.LABEL_OPTIONAL,
    type: FieldDescriptorProto_Type.TYPE_DOUBLE,
    type_name: "",
    extendee: "",
    default_value: "",
    oneof_index: 0,
    json_name: "",
    options: undefined,
  };
}

export const FieldDescriptorProto = {
  encode(message: FieldDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== FieldDescriptorProto_Label.LABEL_OPTIONAL) {
      writer.uint32(32).int32(fieldDescriptorProto_LabelToNumber(message.label));
    }
    if (message.type !== FieldDescriptorProto_Type.TYPE_DOUBLE) {
      writer.uint32(40).int32(fieldDescriptorProto_TypeToNumber(message.type));
    }
    if (message.type_name !== "") {
      writer.uint32(50).string(message.type_name);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.default_value !== "") {
      writer.uint32(58).string(message.default_value);
    }
    if (message.oneof_index !== 0) {
      writer.uint32(72).int32(message.oneof_index);
    }
    if (message.json_name !== "") {
      writer.uint32(82).string(message.json_name);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.label = fieldDescriptorProto_LabelFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = fieldDescriptorProto_TypeFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extendee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.default_value = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.oneof_index = reader.int32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.json_name = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FieldOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      label: isSet(object.label)
        ? fieldDescriptorProto_LabelFromJSON(object.label)
        : FieldDescriptorProto_Label.LABEL_OPTIONAL,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : FieldDescriptorProto_Type.TYPE_DOUBLE,
      type_name: isSet(object.type_name) ? String(object.type_name) : "",
      extendee: isSet(object.extendee) ? String(object.extendee) : "",
      default_value: isSet(object.default_value) ? String(object.default_value) : "",
      oneof_index: isSet(object.oneof_index) ? Number(object.oneof_index) : 0,
      json_name: isSet(object.json_name) ? String(object.json_name) : "",
      options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: FieldDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.type_name !== undefined && (obj.type_name = message.type_name);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.default_value !== undefined && (obj.default_value = message.default_value);
    message.oneof_index !== undefined && (obj.oneof_index = Math.round(message.oneof_index));
    message.json_name !== undefined && (obj.json_name = message.json_name);
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    return FieldDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? FieldDescriptorProto_Label.LABEL_OPTIONAL;
    message.type = object.type ?? FieldDescriptorProto_Type.TYPE_DOUBLE;
    message.type_name = object.type_name ?? "";
    message.extendee = object.extendee ?? "";
    message.default_value = object.default_value ?? "";
    message.oneof_index = object.oneof_index ?? 0;
    message.json_name = object.json_name ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? FieldOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return { name: "" };
}

export const OneofDescriptorProto = {
  encode(message: OneofDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneofDescriptorProto {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: OneofDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    return OneofDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return { name: "", value: [], options: undefined };
}

export const EnumDescriptorProto = {
  encode(message: EnumDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: EnumDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map((e) => e ? EnumValueDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    return EnumDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map((e) => EnumValueDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? EnumOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return { name: "", number: 0, options: undefined };
}

export const EnumValueDescriptorProto = {
  encode(message: EnumValueDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumValueOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumValueDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: EnumValueDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.options !== undefined &&
      (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = (object.options !== undefined && object.options !== null)
      ? EnumValueOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return { name: "", method: [], options: undefined };
}

export const ServiceDescriptorProto = {
  encode(message: ServiceDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ServiceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      method: Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: ServiceDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map((e) => e ? MethodDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto {
    return ServiceDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map((e) => MethodDescriptorProto.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? ServiceOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    input_type: "",
    output_type: "",
    options: undefined,
    client_streaming: false,
    server_streaming: false,
  };
}

export const MethodDescriptorProto = {
  encode(message: MethodDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input_type !== "") {
      writer.uint32(18).string(message.input_type);
    }
    if (message.output_type !== "") {
      writer.uint32(26).string(message.output_type);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.client_streaming === true) {
      writer.uint32(40).bool(message.client_streaming);
    }
    if (message.server_streaming === true) {
      writer.uint32(48).bool(message.server_streaming);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.input_type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.output_type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = MethodOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.client_streaming = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.server_streaming = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MethodDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      input_type: isSet(object.input_type) ? String(object.input_type) : "",
      output_type: isSet(object.output_type) ? String(object.output_type) : "",
      options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
      client_streaming: isSet(object.client_streaming) ? Boolean(object.client_streaming) : false,
      server_streaming: isSet(object.server_streaming) ? Boolean(object.server_streaming) : false,
    };
  },

  toJSON(message: MethodDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.input_type !== undefined && (obj.input_type = message.input_type);
    message.output_type !== undefined && (obj.output_type = message.output_type);
    message.options !== undefined &&
      (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
    message.client_streaming !== undefined && (obj.client_streaming = message.client_streaming);
    message.server_streaming !== undefined && (obj.server_streaming = message.server_streaming);
    return obj;
  },

  create(base?: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto {
    return MethodDescriptorProto.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.input_type = object.input_type ?? "";
    message.output_type = object.output_type ?? "";
    message.options = (object.options !== undefined && object.options !== null)
      ? MethodOptions.fromPartial(object.options)
      : undefined;
    message.client_streaming = object.client_streaming ?? false;
    message.server_streaming = object.server_streaming ?? false;
    return message;
  },
};

function createBaseFileOptions(): FileOptions {
  return {
    java_package: "",
    java_outer_classname: "",
    java_multiple_files: false,
    java_generate_equals_and_hash: false,
    java_string_check_utf8: false,
    optimize_for: FileOptions_OptimizeMode.SPEED,
    go_package: "",
    cc_generic_services: false,
    java_generic_services: false,
    py_generic_services: false,
    deprecated: false,
    cc_enable_arenas: false,
    objc_class_prefix: "",
    csharp_namespace: "",
    uninterpreted_option: [],
  };
}

export const FileOptions = {
  encode(message: FileOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.java_package !== "") {
      writer.uint32(10).string(message.java_package);
    }
    if (message.java_outer_classname !== "") {
      writer.uint32(66).string(message.java_outer_classname);
    }
    if (message.java_multiple_files === true) {
      writer.uint32(80).bool(message.java_multiple_files);
    }
    if (message.java_generate_equals_and_hash === true) {
      writer.uint32(160).bool(message.java_generate_equals_and_hash);
    }
    if (message.java_string_check_utf8 === true) {
      writer.uint32(216).bool(message.java_string_check_utf8);
    }
    if (message.optimize_for !== FileOptions_OptimizeMode.SPEED) {
      writer.uint32(72).int32(fileOptions_OptimizeModeToNumber(message.optimize_for));
    }
    if (message.go_package !== "") {
      writer.uint32(90).string(message.go_package);
    }
    if (message.cc_generic_services === true) {
      writer.uint32(128).bool(message.cc_generic_services);
    }
    if (message.java_generic_services === true) {
      writer.uint32(136).bool(message.java_generic_services);
    }
    if (message.py_generic_services === true) {
      writer.uint32(144).bool(message.py_generic_services);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.cc_enable_arenas === true) {
      writer.uint32(248).bool(message.cc_enable_arenas);
    }
    if (message.objc_class_prefix !== "") {
      writer.uint32(290).string(message.objc_class_prefix);
    }
    if (message.csharp_namespace !== "") {
      writer.uint32(298).string(message.csharp_namespace);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.java_package = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.java_outer_classname = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.java_multiple_files = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.java_generate_equals_and_hash = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.java_string_check_utf8 = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.optimize_for = fileOptions_OptimizeModeFromJSON(reader.int32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.go_package = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.cc_generic_services = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.java_generic_services = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.py_generic_services = reader.bool();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.cc_enable_arenas = reader.bool();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.objc_class_prefix = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.csharp_namespace = reader.string();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileOptions {
    return {
      java_package: isSet(object.java_package) ? String(object.java_package) : "",
      java_outer_classname: isSet(object.java_outer_classname) ? String(object.java_outer_classname) : "",
      java_multiple_files: isSet(object.java_multiple_files) ? Boolean(object.java_multiple_files) : false,
      java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash)
        ? Boolean(object.java_generate_equals_and_hash)
        : false,
      java_string_check_utf8: isSet(object.java_string_check_utf8) ? Boolean(object.java_string_check_utf8) : false,
      optimize_for: isSet(object.optimize_for)
        ? fileOptions_OptimizeModeFromJSON(object.optimize_for)
        : FileOptions_OptimizeMode.SPEED,
      go_package: isSet(object.go_package) ? String(object.go_package) : "",
      cc_generic_services: isSet(object.cc_generic_services) ? Boolean(object.cc_generic_services) : false,
      java_generic_services: isSet(object.java_generic_services) ? Boolean(object.java_generic_services) : false,
      py_generic_services: isSet(object.py_generic_services) ? Boolean(object.py_generic_services) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      cc_enable_arenas: isSet(object.cc_enable_arenas) ? Boolean(object.cc_enable_arenas) : false,
      objc_class_prefix: isSet(object.objc_class_prefix) ? String(object.objc_class_prefix) : "",
      csharp_namespace: isSet(object.csharp_namespace) ? String(object.csharp_namespace) : "",
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    message.java_package !== undefined && (obj.java_package = message.java_package);
    message.java_outer_classname !== undefined && (obj.java_outer_classname = message.java_outer_classname);
    message.java_multiple_files !== undefined && (obj.java_multiple_files = message.java_multiple_files);
    message.java_generate_equals_and_hash !== undefined &&
      (obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash);
    message.java_string_check_utf8 !== undefined && (obj.java_string_check_utf8 = message.java_string_check_utf8);
    message.optimize_for !== undefined && (obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimize_for));
    message.go_package !== undefined && (obj.go_package = message.go_package);
    message.cc_generic_services !== undefined && (obj.cc_generic_services = message.cc_generic_services);
    message.java_generic_services !== undefined && (obj.java_generic_services = message.java_generic_services);
    message.py_generic_services !== undefined && (obj.py_generic_services = message.py_generic_services);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.cc_enable_arenas !== undefined && (obj.cc_enable_arenas = message.cc_enable_arenas);
    message.objc_class_prefix !== undefined && (obj.objc_class_prefix = message.objc_class_prefix);
    message.csharp_namespace !== undefined && (obj.csharp_namespace = message.csharp_namespace);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FileOptions>): FileOptions {
    return FileOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FileOptions>): FileOptions {
    const message = createBaseFileOptions();
    message.java_package = object.java_package ?? "";
    message.java_outer_classname = object.java_outer_classname ?? "";
    message.java_multiple_files = object.java_multiple_files ?? false;
    message.java_generate_equals_and_hash = object.java_generate_equals_and_hash ?? false;
    message.java_string_check_utf8 = object.java_string_check_utf8 ?? false;
    message.optimize_for = object.optimize_for ?? FileOptions_OptimizeMode.SPEED;
    message.go_package = object.go_package ?? "";
    message.cc_generic_services = object.cc_generic_services ?? false;
    message.java_generic_services = object.java_generic_services ?? false;
    message.py_generic_services = object.py_generic_services ?? false;
    message.deprecated = object.deprecated ?? false;
    message.cc_enable_arenas = object.cc_enable_arenas ?? false;
    message.objc_class_prefix = object.objc_class_prefix ?? "";
    message.csharp_namespace = object.csharp_namespace ?? "";
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessageOptions(): MessageOptions {
  return {
    message_set_wire_format: false,
    no_standard_descriptor_accessor: false,
    deprecated: false,
    map_entry: false,
    uninterpreted_option: [],
  };
}

export const MessageOptions = {
  encode(message: MessageOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message_set_wire_format === true) {
      writer.uint32(8).bool(message.message_set_wire_format);
    }
    if (message.no_standard_descriptor_accessor === true) {
      writer.uint32(16).bool(message.no_standard_descriptor_accessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.map_entry === true) {
      writer.uint32(56).bool(message.map_entry);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.message_set_wire_format = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.no_standard_descriptor_accessor = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.map_entry = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageOptions {
    return {
      message_set_wire_format: isSet(object.message_set_wire_format) ? Boolean(object.message_set_wire_format) : false,
      no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor)
        ? Boolean(object.no_standard_descriptor_accessor)
        : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      map_entry: isSet(object.map_entry) ? Boolean(object.map_entry) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    message.message_set_wire_format !== undefined && (obj.message_set_wire_format = message.message_set_wire_format);
    message.no_standard_descriptor_accessor !== undefined &&
      (obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.map_entry !== undefined && (obj.map_entry = message.map_entry);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MessageOptions>): MessageOptions {
    return MessageOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = createBaseMessageOptions();
    message.message_set_wire_format = object.message_set_wire_format ?? false;
    message.no_standard_descriptor_accessor = object.no_standard_descriptor_accessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.map_entry = object.map_entry ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: FieldOptions_CType.STRING,
    packed: false,
    jstype: FieldOptions_JSType.JS_NORMAL,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpreted_option: [],
  };
}

export const FieldOptions = {
  encode(message: FieldOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctype !== FieldOptions_CType.STRING) {
      writer.uint32(8).int32(fieldOptions_CTypeToNumber(message.ctype));
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== FieldOptions_JSType.JS_NORMAL) {
      writer.uint32(48).int32(fieldOptions_JSTypeToNumber(message.jstype));
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ctype = fieldOptions_CTypeFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.packed = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.jstype = fieldOptions_JSTypeFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lazy = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.weak = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : FieldOptions_CType.STRING,
      packed: isSet(object.packed) ? Boolean(object.packed) : false,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : FieldOptions_JSType.JS_NORMAL,
      lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      weak: isSet(object.weak) ? Boolean(object.weak) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<FieldOptions>): FieldOptions {
    return FieldOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? FieldOptions_CType.STRING;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? FieldOptions_JSType.JS_NORMAL;
    message.lazy = object.lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEnumOptions(): EnumOptions {
  return { allow_alias: false, deprecated: false, uninterpreted_option: [] };
}

export const EnumOptions = {
  encode(message: EnumOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow_alias === true) {
      writer.uint32(16).bool(message.allow_alias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allow_alias = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumOptions {
    return {
      allow_alias: isSet(object.allow_alias) ? Boolean(object.allow_alias) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EnumOptions): unknown {
    const obj: any = {};
    message.allow_alias !== undefined && (obj.allow_alias = message.allow_alias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<EnumOptions>): EnumOptions {
    return EnumOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EnumOptions>): EnumOptions {
    const message = createBaseEnumOptions();
    message.allow_alias = object.allow_alias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEnumValueOptions(): EnumValueOptions {
  return { deprecated: false, uninterpreted_option: [] };
}

export const EnumValueOptions = {
  encode(message: EnumValueOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumValueOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EnumValueOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<EnumValueOptions>): EnumValueOptions {
    return EnumValueOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServiceOptions(): ServiceOptions {
  return { deprecated: false, uninterpreted_option: [] };
}

export const ServiceOptions = {
  encode(message: ServiceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ServiceOptions>): ServiceOptions {
    return ServiceOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions {
    const message = createBaseServiceOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMethodOptions(): MethodOptions {
  return { deprecated: false, uninterpreted_option: [] };
}

export const MethodOptions = {
  encode(message: MethodOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MethodOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MethodOptions>): MethodOptions {
    return MethodOptions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MethodOptions>): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifier_value: "",
    positive_int_value: 0,
    negative_int_value: 0,
    double_value: 0,
    string_value: Buffer.alloc(0),
    aggregate_value: "",
  };
}

export const UninterpretedOption = {
  encode(message: UninterpretedOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifier_value !== "") {
      writer.uint32(26).string(message.identifier_value);
    }
    if (message.positive_int_value !== 0) {
      writer.uint32(32).uint64(message.positive_int_value);
    }
    if (message.negative_int_value !== 0) {
      writer.uint32(40).int64(message.negative_int_value);
    }
    if (message.double_value !== 0) {
      writer.uint32(49).double(message.double_value);
    }
    if (message.string_value.length !== 0) {
      writer.uint32(58).bytes(message.string_value);
    }
    if (message.aggregate_value !== "") {
      writer.uint32(66).string(message.aggregate_value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identifier_value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.positive_int_value = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.negative_int_value = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.double_value = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.string_value = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.aggregate_value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UninterpretedOption {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e)) : [],
      identifier_value: isSet(object.identifier_value) ? String(object.identifier_value) : "",
      positive_int_value: isSet(object.positive_int_value) ? Number(object.positive_int_value) : 0,
      negative_int_value: isSet(object.negative_int_value) ? Number(object.negative_int_value) : 0,
      double_value: isSet(object.double_value) ? Number(object.double_value) : 0,
      string_value: isSet(object.string_value) ? Buffer.from(bytesFromBase64(object.string_value)) : Buffer.alloc(0),
      aggregate_value: isSet(object.aggregate_value) ? String(object.aggregate_value) : "",
    };
  },

  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map((e) => e ? UninterpretedOption_NamePart.toJSON(e) : undefined);
    } else {
      obj.name = [];
    }
    message.identifier_value !== undefined && (obj.identifier_value = message.identifier_value);
    message.positive_int_value !== undefined && (obj.positive_int_value = Math.round(message.positive_int_value));
    message.negative_int_value !== undefined && (obj.negative_int_value = Math.round(message.negative_int_value));
    message.double_value !== undefined && (obj.double_value = message.double_value);
    message.string_value !== undefined &&
      (obj.string_value = base64FromBytes(message.string_value !== undefined ? message.string_value : Buffer.alloc(0)));
    message.aggregate_value !== undefined && (obj.aggregate_value = message.aggregate_value);
    return obj;
  },

  create(base?: DeepPartial<UninterpretedOption>): UninterpretedOption {
    return UninterpretedOption.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map((e) => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifier_value = object.identifier_value ?? "";
    message.positive_int_value = object.positive_int_value ?? 0;
    message.negative_int_value = object.negative_int_value ?? 0;
    message.double_value = object.double_value ?? 0;
    message.string_value = object.string_value ?? Buffer.alloc(0);
    message.aggregate_value = object.aggregate_value ?? "";
    return message;
  },
};

function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return { name_part: "", is_extension: false };
}

export const UninterpretedOption_NamePart = {
  encode(message: UninterpretedOption_NamePart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name_part !== "") {
      writer.uint32(10).string(message.name_part);
    }
    if (message.is_extension === true) {
      writer.uint32(16).bool(message.is_extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name_part = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.is_extension = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UninterpretedOption_NamePart {
    return {
      name_part: isSet(object.name_part) ? String(object.name_part) : "",
      is_extension: isSet(object.is_extension) ? Boolean(object.is_extension) : false,
    };
  },

  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    message.name_part !== undefined && (obj.name_part = message.name_part);
    message.is_extension !== undefined && (obj.is_extension = message.is_extension);
    return obj;
  },

  create(base?: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.name_part = object.name_part ?? "";
    message.is_extension = object.is_extension ?? false;
    return message;
  },
};

function createBaseSourceCodeInfo(): SourceCodeInfo {
  return { location: [] };
}

export const SourceCodeInfo = {
  encode(message: SourceCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceCodeInfo {
    return {
      location: Array.isArray(object?.location)
        ? object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SourceCodeInfo): unknown {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map((e) => e ? SourceCodeInfo_Location.toJSON(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    return SourceCodeInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map((e) => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return { path: [], span: [], leading_comments: "", trailing_comments: "", leading_detached_comments: [] };
}

export const SourceCodeInfo_Location = {
  encode(message: SourceCodeInfo_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leading_comments !== "") {
      writer.uint32(26).string(message.leading_comments);
    }
    if (message.trailing_comments !== "") {
      writer.uint32(34).string(message.trailing_comments);
    }
    for (const v of message.leading_detached_comments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag === 16) {
            message.span.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leading_comments = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trailing_comments = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.leading_detached_comments.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceCodeInfo_Location {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : [],
      span: Array.isArray(object?.span) ? object.span.map((e: any) => Number(e)) : [],
      leading_comments: isSet(object.leading_comments) ? String(object.leading_comments) : "",
      trailing_comments: isSet(object.trailing_comments) ? String(object.trailing_comments) : "",
      leading_detached_comments: Array.isArray(object?.leading_detached_comments)
        ? object.leading_detached_comments.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: SourceCodeInfo_Location): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => Math.round(e));
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map((e) => Math.round(e));
    } else {
      obj.span = [];
    }
    message.leading_comments !== undefined && (obj.leading_comments = message.leading_comments);
    message.trailing_comments !== undefined && (obj.trailing_comments = message.trailing_comments);
    if (message.leading_detached_comments) {
      obj.leading_detached_comments = message.leading_detached_comments.map((e) => e);
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map((e) => e) || [];
    message.span = object.span?.map((e) => e) || [];
    message.leading_comments = object.leading_comments ?? "";
    message.trailing_comments = object.trailing_comments ?? "";
    message.leading_detached_comments = object.leading_detached_comments?.map((e) => e) || [];
    return message;
  },
};

function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return { annotation: [] };
}

export const GeneratedCodeInfo = {
  encode(message: GeneratedCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeneratedCodeInfo {
    return {
      annotation: Array.isArray(object?.annotation)
        ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GeneratedCodeInfo): unknown {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map((e) => e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    return GeneratedCodeInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map((e) => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return { path: [], source_file: "", begin: 0, end: 0 };
}

export const GeneratedCodeInfo_Annotation = {
  encode(message: GeneratedCodeInfo_Annotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.source_file !== "") {
      writer.uint32(18).string(message.source_file);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source_file = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.begin = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : [],
      source_file: isSet(object.source_file) ? String(object.source_file) : "",
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
    };
  },

  toJSON(message: GeneratedCodeInfo_Annotation): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map((e) => Math.round(e));
    } else {
      obj.path = [];
    }
    message.source_file !== undefined && (obj.source_file = message.source_file);
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },

  create(base?: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map((e) => e) || [];
    message.source_file = object.source_file ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

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
    "name": "google/protobuf/descriptor.proto",
    "package": "google.protobuf",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "FileDescriptorSet",
      "field": [{
        "name": "file",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FileDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "file",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FileDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "package",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "package",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "dependency",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "dependency",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "public_dependency",
        "number": 10,
        "label": 3,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "publicDependency",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weak_dependency",
        "number": 11,
        "label": 3,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "weakDependency",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "message_type",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "messageType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "enum_type",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "enumType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "service",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.ServiceDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "service",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FieldDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extension",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.FileOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "source_code_info",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.SourceCodeInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sourceCodeInfo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "syntax",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "syntax",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "field",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FieldDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FieldDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extension",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "nested_type",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "nestedType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "enum_type",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "enumType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension_range",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto.ExtensionRange",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extensionRange",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "oneof_decl",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.OneofDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "oneofDecl",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.MessageOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reserved_range",
        "number": 9,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto.ReservedRange",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservedRange",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reserved_name",
        "number": 10,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservedName",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "ExtensionRange",
        "field": [{
          "name": "start",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "start",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 2,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "ReservedRange",
        "field": [{
          "name": "start",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "start",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 2,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FieldDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "number",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "number",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "label",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldDescriptorProto.Label",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "label",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldDescriptorProto.Type",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type_name",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "typeName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extendee",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extendee",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "default_value",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "defaultValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "oneof_index",
        "number": 9,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "oneofIndex",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "json_name",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "jsonName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.FieldOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "Type",
        "value": [
          { "name": "TYPE_DOUBLE", "number": 1, "options": undefined },
          { "name": "TYPE_FLOAT", "number": 2, "options": undefined },
          { "name": "TYPE_INT64", "number": 3, "options": undefined },
          { "name": "TYPE_UINT64", "number": 4, "options": undefined },
          { "name": "TYPE_INT32", "number": 5, "options": undefined },
          { "name": "TYPE_FIXED64", "number": 6, "options": undefined },
          { "name": "TYPE_FIXED32", "number": 7, "options": undefined },
          { "name": "TYPE_BOOL", "number": 8, "options": undefined },
          { "name": "TYPE_STRING", "number": 9, "options": undefined },
          { "name": "TYPE_GROUP", "number": 10, "options": undefined },
          { "name": "TYPE_MESSAGE", "number": 11, "options": undefined },
          { "name": "TYPE_BYTES", "number": 12, "options": undefined },
          { "name": "TYPE_UINT32", "number": 13, "options": undefined },
          { "name": "TYPE_ENUM", "number": 14, "options": undefined },
          { "name": "TYPE_SFIXED32", "number": 15, "options": undefined },
          { "name": "TYPE_SFIXED64", "number": 16, "options": undefined },
          { "name": "TYPE_SINT32", "number": 17, "options": undefined },
          { "name": "TYPE_SINT64", "number": 18, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "Label",
        "value": [{ "name": "LABEL_OPTIONAL", "number": 1, "options": undefined }, {
          "name": "LABEL_REQUIRED",
          "number": 2,
          "options": undefined,
        }, { "name": "LABEL_REPEATED", "number": 3, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OneofDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumValueDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.EnumOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumValueDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "number",
        "number": 2,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "number",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.EnumValueOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ServiceDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "method",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.MethodDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "method",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.ServiceOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "MethodDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "input_type",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "inputType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "output_type",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "outputType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.MethodOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "client_streaming",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "clientStreaming",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "server_streaming",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "serverStreaming",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FileOptions",
      "field": [{
        "name": "java_package",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "javaPackage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_outer_classname",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "javaOuterClassname",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_multiple_files",
        "number": 10,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaMultipleFiles",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_generate_equals_and_hash",
        "number": 20,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaGenerateEqualsAndHash",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_string_check_utf8",
        "number": 27,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaStringCheckUtf8",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "optimize_for",
        "number": 9,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FileOptions.OptimizeMode",
        "extendee": "",
        "defaultValue": "SPEED",
        "oneofIndex": 0,
        "jsonName": "optimizeFor",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "go_package",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "goPackage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "cc_generic_services",
        "number": 16,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "ccGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_generic_services",
        "number": 17,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "py_generic_services",
        "number": 18,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "pyGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 23,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "cc_enable_arenas",
        "number": 31,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "ccEnableArenas",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "objc_class_prefix",
        "number": 36,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "objcClassPrefix",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "csharp_namespace",
        "number": 37,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "csharpNamespace",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "OptimizeMode",
        "value": [{ "name": "SPEED", "number": 1, "options": undefined }, {
          "name": "CODE_SIZE",
          "number": 2,
          "options": undefined,
        }, { "name": "LITE_RUNTIME", "number": 3, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [{ "start": 38, "end": 39 }],
      "reservedName": [],
    }, {
      "name": "MessageOptions",
      "field": [{
        "name": "message_set_wire_format",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "messageSetWireFormat",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "no_standard_descriptor_accessor",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "noStandardDescriptorAccessor",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "map_entry",
        "number": 7,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "mapEntry",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FieldOptions",
      "field": [{
        "name": "ctype",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldOptions.CType",
        "extendee": "",
        "defaultValue": "STRING",
        "oneofIndex": 0,
        "jsonName": "ctype",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "packed",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "jstype",
        "number": 6,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldOptions.JSType",
        "extendee": "",
        "defaultValue": "JS_NORMAL",
        "oneofIndex": 0,
        "jsonName": "jstype",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "lazy",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "lazy",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weak",
        "number": 10,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "weak",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "CType",
        "value": [{ "name": "STRING", "number": 0, "options": undefined }, {
          "name": "CORD",
          "number": 1,
          "options": undefined,
        }, { "name": "STRING_PIECE", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "JSType",
        "value": [{ "name": "JS_NORMAL", "number": 0, "options": undefined }, {
          "name": "JS_STRING",
          "number": 1,
          "options": undefined,
        }, { "name": "JS_NUMBER", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumOptions",
      "field": [{
        "name": "allow_alias",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "allowAlias",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumValueOptions",
      "field": [{
        "name": "deprecated",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ServiceOptions",
      "field": [{
        "name": "deprecated",
        "number": 33,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "MethodOptions",
      "field": [{
        "name": "deprecated",
        "number": 33,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UninterpretedOption",
      "field": [{
        "name": "name",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption.NamePart",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "identifier_value",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifierValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "positive_int_value",
        "number": 4,
        "label": 1,
        "type": 4,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "positiveIntValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "negative_int_value",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "negativeIntValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "double_value",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "doubleValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "string_value",
        "number": 7,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "stringValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "aggregate_value",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "aggregateValue",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "NamePart",
        "field": [{
          "name": "name_part",
          "number": 1,
          "label": 2,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "namePart",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "is_extension",
          "number": 2,
          "label": 2,
          "type": 8,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "isExtension",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SourceCodeInfo",
      "field": [{
        "name": "location",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.SourceCodeInfo.Location",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "location",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "Location",
        "field": [{
          "name": "path",
          "number": 1,
          "label": 3,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "path",
          "options": {
            "ctype": 0,
            "packed": true,
            "jstype": 0,
            "lazy": false,
            "deprecated": false,
            "weak": false,
            "uninterpretedOption": [],
          },
          "proto3Optional": false,
        }, {
          "name": "span",
          "number": 2,
          "label": 3,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "span",
          "options": {
            "ctype": 0,
            "packed": true,
            "jstype": 0,
            "lazy": false,
            "deprecated": false,
            "weak": false,
            "uninterpretedOption": [],
          },
          "proto3Optional": false,
        }, {
          "name": "leading_comments",
          "number": 3,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "leadingComments",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "trailing_comments",
          "number": 4,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "trailingComments",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "leading_detached_comments",
          "number": 6,
          "label": 3,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "leadingDetachedComments",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "GeneratedCodeInfo",
      "field": [{
        "name": "annotation",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.GeneratedCodeInfo.Annotation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "annotation",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "Annotation",
        "field": [{
          "name": "path",
          "number": 1,
          "label": 3,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "path",
          "options": {
            "ctype": 0,
            "packed": true,
            "jstype": 0,
            "lazy": false,
            "deprecated": false,
            "weak": false,
            "uninterpretedOption": [],
          },
          "proto3Optional": false,
        }, {
          "name": "source_file",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "sourceFile",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "begin",
          "number": 3,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "begin",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 4,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "com.google.protobuf",
      "javaOuterClassname": "DescriptorProtos",
      "javaMultipleFiles": false,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "descriptor",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": false,
      "objcClassPrefix": "GPB",
      "csharpNamespace": "Google.Protobuf.Reflection",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [8, 9],
        "span": [51, 0, 28],
        "leadingComments":
          "* descriptor.proto must be optimized for speed because reflection-based\n algorithms don't work during bootstrapping.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [56, 0, 58, 1],
        "leadingComments":
          " The protocol compiler can output a FileDescriptorSet containing the .proto\n files it parses.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [61, 0, 90, 1],
        "leadingComments": "/ Describes a complete .proto file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [62, 2, 27],
        "leadingComments": "",
        "trailingComments": "/ file name, relative to root of source tree\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [63, 2, 30],
        "leadingComments": "",
        "trailingComments": '/ e.g. "foo", "foo.bar", etc.\n',
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 2],
        "span": [66, 2, 33],
        "leadingComments": "/ Names of files imported by this file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [68, 2, 40],
        "leadingComments": "/ Indexes of the public imported files in the dependency list above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [71, 2, 38],
        "leadingComments":
          "/ Indexes of the weak imported files in the dependency list.\n/ For Google-internal migration only. Do not use.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [74, 2, 44],
        "leadingComments": "/ All top-level definitions in this file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 10],
        "span": [85, 2, 47],
        "leadingComments":
          "/ This field contains optional information about the original source code.\n/ You may safely remove this entire field without harming runtime\n/ functionality of the descriptors -- the information is needed only by\n/ development tools.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 11],
        "span": [89, 2, 30],
        "leadingComments": '/ The syntax of the proto file.\n/ The supported values are "proto2" and "proto3".\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [93, 0, 123, 1],
        "leadingComments": "/ Describes a message type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 1],
        "span": [115, 2, 118, 3],
        "leadingComments":
          "/ Range of reserved tag numbers. Reserved tag numbers may not be used by\n/ fields or extension ranges in the same message. Reserved ranges may\n/ not overlap.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 1, 2, 0],
        "span": [116, 4, 29],
        "leadingComments": "",
        "trailingComments": "/ Inclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 1, 2, 1],
        "span": [117, 4, 27],
        "leadingComments": "",
        "trailingComments": "/ Exclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 9],
        "span": [122, 2, 37],
        "leadingComments":
          "/ Reserved field names, which may not be used by fields in the same message.\n/ A given name may only be reserved once.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3],
        "span": [126, 0, 201, 1],
        "leadingComments": "/ Describes a field within a message.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 0],
        "span": [130, 4, 28],
        "leadingComments": "/ 0 is reserved for errors.\n/ Order is weird for historical reasons.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 2],
        "span": [134, 4, 28],
        "leadingComments":
          "/ Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if\n/ negative values are likely.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 4],
        "span": [138, 4, 28],
        "leadingComments":
          "/ Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if\n/ negative values are likely.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 9],
        "span": [143, 4, 29],
        "leadingComments": "",
        "trailingComments": "/ Tag-delimited aggregate.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 10],
        "span": [144, 4, 29],
        "leadingComments": "",
        "trailingComments": "/ Length-delimited aggregate.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 11],
        "span": [147, 4, 29],
        "leadingComments": "/ New in version 2.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 16],
        "span": [152, 4, 29],
        "leadingComments": "",
        "trailingComments": "/ Uses ZigZag encoding.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 0, 2, 17],
        "span": [153, 4, 29],
        "leadingComments": "",
        "trailingComments": "/ Uses ZigZag encoding.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 1, 2, 0],
        "span": [158, 4, 28],
        "leadingComments": "/ 0 is reserved for errors\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 4, 1, 2, 2],
        "span": [160, 4, 28],
        "leadingComments": "",
        "trailingComments": "/ TODO(sanjay): Should we add LABEL_MAP?\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 3],
        "span": [170, 2, 25],
        "leadingComments":
          "/ If type_name is set, this need not be set.  If both this and type_name\n/ are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 4],
        "span": [177, 2, 32],
        "leadingComments":
          "/ For message and enum types, this is the name of the type.  If the name\n/ starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping\n/ rules are used to find the type (i.e. first the nested types within this\n/ message are searched, then within the parent, on up to the root\n/ namespace).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 5],
        "span": [181, 2, 31],
        "leadingComments":
          "/ For extensions, this is the name of the type being extended.  It is\n/ resolved in the same manner as type_name.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 6],
        "span": [188, 2, 36],
        "leadingComments":
          '/ For numeric types, contains the original text representation of the value.\n/ For booleans, "true" or "false".\n/ For strings, contains the default text contents (not escaped in any way).\n/ For bytes, contains the C escaped value.  All bytes >= 128 are escaped.\n/ TODO(kenton):  Base-64 encode?\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 7],
        "span": [192, 2, 33],
        "leadingComments":
          "/ If set, gives the index of a oneof in the containing type's oneof_decl\n/ list.  This field is a member of that oneof.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 8],
        "span": [198, 2, 33],
        "leadingComments":
          "/ JSON name of this field. The value is set by protocol compiler. If the\n/ user has set a \"json_name\" option on this field, that option's value\n/ will be used. Otherwise, it's deduced from the field's name by converting\n/ it to camelCase.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4],
        "span": [204, 0, 206, 1],
        "leadingComments": "/ Describes a oneof.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [209, 0, 215, 1],
        "leadingComments": "/ Describes an enum type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [218, 0, 223, 1],
        "leadingComments": "/ Describes a value within an enum.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7],
        "span": [226, 0, 231, 1],
        "leadingComments": "/ Describes a service.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [234, 0, 248, 1],
        "leadingComments": "/ Describes a method of a service.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 1],
        "span": [239, 2, 33],
        "leadingComments":
          "/ Input and output type names.  These are resolved in the same way as\n/ FieldDescriptorProto.type_name, but must refer to a message type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 4],
        "span": [245, 2, 53],
        "leadingComments": "/ Identifies if client streams multiple client messages\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8, 2, 5],
        "span": [247, 2, 53],
        "leadingComments": "/ Identifies if server streams multiple server messages\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 0],
        "span": [290, 2, 35],
        "leadingComments":
          "/ Sets the Java package where classes generated from this .proto will be\n/ placed.  By default, the proto package is used, but this is often\n/ inappropriate because proto packages do not normally start with backwards\n/ domain names.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 1],
        "span": [298, 2, 43],
        "leadingComments":
          '/ If set, all the classes from the .proto file are wrapped in a single\n/ outer class with the given name.  This applies to both Proto1\n/ (equivalent to the old "--one_java_file" option) and Proto2 (where\n/ a .proto always translates to a single class, but you may want to\n/ explicitly choose the class name).\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 2],
        "span": [306, 2, 57],
        "leadingComments":
          "/ If set true, then the Java code generator will generate a separate .java\n/ file for each top-level message, enum, and service defined in the .proto\n/ file.  Thus, these types will *not* be nested inside the outer class\n/ named by java_outer_classname.  However, the outer class will still be\n/ generated to contain the file's getDescriptor() method as well as any\n/ top-level extensions defined in the file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 3],
        "span": [320, 2, 67],
        "leadingComments":
          "/ If set true, then the Java code generator will generate equals() and\n/ hashCode() methods for all messages defined in the .proto file.\n/ This increases generated code size, potentially substantially for large\n/ protos, which may harm a memory-constrained application.\n/ - In the full runtime this is a speed optimization, as the\n/ AbstractMessage base class includes reflection-based implementations of\n/ these methods.\n/ - In the lite runtime, setting this option changes the semantics of\n/ equals() and hashCode() to more closely match those of the full runtime;\n/ the generated methods compute their results based on field values rather\n/ than object identity. (Implementations should not assume that hashcodes\n/ will be consistent across runtimes or versions of the protocol compiler.)\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 4],
        "span": [328, 2, 60],
        "leadingComments":
          "/ If set true, then the Java2 code generator will generate code that\n/ throws an exception whenever an attempt is made to assign a non-UTF-8\n/ byte sequence to a string field.\n/ Message reflection will do the same.\n/ However, an extension field still accepts non-UTF-8 byte sequences.\n/ This option has no effect on when used with the lite runtime.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 4, 0],
        "span": [332, 2, 337, 3],
        "leadingComments": "/ Generated classes can be optimized for speed or code size.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 4, 0, 2, 0],
        "span": [333, 4, 14],
        "leadingComments": "",
        "trailingComments": "/ Generate complete code for parsing, serialization,\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 4, 0, 2, 1],
        "span": [335, 4, 18],
        "leadingComments": "/ etc.\n",
        "trailingComments": "/ Use ReflectionOps to implement these methods.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 4, 0, 2, 2],
        "span": [336, 4, 21],
        "leadingComments": "",
        "trailingComments": "/ Generate code using MessageLite and the lite runtime.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 6],
        "span": [345, 2, 34],
        "leadingComments":
          "/ Sets the Go package where structs generated from this .proto will be\n/ placed. If omitted, the Go package will be derived from the following:\n/   - The basename of the package import path, if provided.\n/   - Otherwise, the package statement in the .proto file, if present.\n/   - Otherwise, the basename of the .proto file, without extension.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 7],
        "span": [359, 2, 57],
        "leadingComments":
          '/ Should generic services be generated in each language?  "Generic" services\n/ are not specific to any particular RPC system.  They are generated by the\n/ main code generators in each language (without additional plugins).\n/ Generic services were the only kind of service generation supported by\n/ early versions of google.protobuf.\n\n/ Generic services are now considered deprecated in favor of using plugins\n/ that generate code specific to your particular RPC system.  Therefore,\n/ these default to false.  Old code which depends on generic services should\n/ explicitly set them to true.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 10],
        "span": [367, 2, 48],
        "leadingComments":
          "/ Is this file deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for everything in the file, or it will be completely ignored; in the very\n/ least, this is a formalization for deprecating files.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 11],
        "span": [371, 2, 54],
        "leadingComments":
          "/ Enables the use of arenas for the proto messages in this file. This applies\n/ only to generated classes for C++.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 12],
        "span": [376, 2, 41],
        "leadingComments":
          "/ Sets the objective c class prefix which is prepended to all objective c\n/ generated classes from this .proto. There is no default.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 13],
        "span": [379, 2, 40],
        "leadingComments": "/ Namespace for generated classes; defaults to the package.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 14],
        "span": [382, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 5],
        "span": [385, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 0],
        "span": [409, 2, 60],
        "leadingComments":
          "/ Set true to use the old proto1 MessageSet wire format for extensions.\n/ This is provided for backwards-compatibility with the MessageSet wire\n/ format.  You should not use this for any other reason:  It's less\n/ efficient, has fewer features, and is more complicated.\n\n/ The message must be defined exactly as follows:\n/   message Foo {\n/     option message_set_wire_format = true;\n/     extensions 4 to max;\n/   }\n/ Note that the message cannot have any defined fields; MessageSets only\n/ have extensions.\n\n/ All extensions of your type must be singular messages; e.g. they cannot\n/ be int32s, enums, or repeated messages.\n\n/ Because this is an option, the above two restrictions are not enforced by\n/ the protocol compiler.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 1],
        "span": [414, 2, 68],
        "leadingComments":
          '/ Disables the generation of the standard "descriptor()" accessor, which can\n/ conflict with a field of the same name.  This is meant to make migration\n/ from proto1 easier; new code should avoid fields named "descriptor".\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 2],
        "span": [420, 2, 47],
        "leadingComments":
          "/ Is this message deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for the message, or it will be completely ignored; in the very least,\n/ this is a formalization for deprecating messages.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 3],
        "span": [443, 2, 30],
        "leadingComments":
          "/ Whether the message is an automatically generated map entry type for the\n/ maps field.\n\n/ For maps fields:\n/     map<KeyType, ValueType> map_field = 1;\n/ The parsed descriptor looks like:\n/     message MapFieldEntry {\n/         option map_entry = true;\n/         optional KeyType key = 1;\n/         optional ValueType value = 2;\n/     }\n/     repeated MapFieldEntry map_field = 1;\n\n/ Implementations may choose not to generate the map_entry=true message, but\n/ use a native map in the target language to hold the keys and values.\n/ The reflection APIs in such implementions still need to work as\n/ if the field is a repeated message field.\n\n/ NOTE: Do not set the option in .proto files. Always use the maps syntax\n/ instead. The option should only be implicitly set by the proto compiler\n/ parser.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 4],
        "span": [446, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 5],
        "span": [449, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 0],
        "span": [457, 2, 46],
        "leadingComments":
          "/ The ctype option instructs the C++ code generator to use a different\n/ representation of the field than it normally would.  See the specific\n/ options below.  This option is not yet implemented in the open source\n/ release -- sorry, we'll try to include it in a future version!\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 4, 0, 2, 0],
        "span": [460, 4, 15],
        "leadingComments": "/ Default mode.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 1],
        "span": [471, 2, 27],
        "leadingComments":
          "/ The packed option can be enabled for repeated primitive fields to enable\n/ a more efficient representation on the wire. Rather than repeatedly\n/ writing the tag and type for each element, the entire array is encoded as\n/ a single length-delimited blob. In proto3, only explicit setting it to\n/ false will avoid using packed encoding.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 2],
        "span": [483, 2, 51],
        "leadingComments":
          '/ The jstype option determines the JavaScript type used for values of the\n/ field.  The option is permitted only for 64 bit integral and fixed types\n/ (int64, uint64, sint64, fixed64, sfixed64).  By default these types are\n/ represented as JavaScript strings.  This avoids loss of precision that can\n/ happen when a large value is converted to a floating point JavaScript\n/ numbers.  Specifying JS_NUMBER for the jstype causes the generated\n/ JavaScript code to use the JavaScript "number" type instead of strings.\n/ This option is an enum to permit additional types to be added,\n/ e.g. goog.math.Integer.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 4, 1, 2, 0],
        "span": [486, 4, 18],
        "leadingComments": "/ Use the default type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 4, 1, 2, 1],
        "span": [489, 4, 18],
        "leadingComments": "/ Use JavaScript strings.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 4, 1, 2, 2],
        "span": [492, 4, 18],
        "leadingComments": "/ Use JavaScript numbers.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 3],
        "span": [523, 2, 41],
        "leadingComments":
          "/ Should this field be parsed lazily?  Lazy applies only to message-type\n/ fields.  It means that when the outer message is initially parsed, the\n/ inner message's contents will not be parsed but instead stored in encoded\n/ form.  The inner message will actually be parsed when it is first accessed.\n\n/ This is only a hint.  Implementations are free to choose whether to use\n/ eager or lazy parsing regardless of the value of this option.  However,\n/ setting this option true suggests that the protocol author believes that\n/ using lazy parsing on this field is worth the additional bookkeeping\n/ overhead typically needed to implement it.\n\n/ This option does not affect the public interface of any generated code;\n/ all method signatures remain the same.  Furthermore, thread-safety of the\n/ interface is not affected by this option; const methods remain safe to\n/ call from multiple threads concurrently, while non-const methods continue\n/ to require exclusive access.\n\n\n/ Note that implementations may choose not to check required fields within\n/ a lazy sub-message.  That is, calling IsInitialized() on the outher message\n/ may return true even if the inner message has missing required fields.\n/ This is necessary because otherwise the inner message would have to be\n/ parsed in order to perform the check, defeating the purpose of lazy\n/ parsing.  An implementation which chooses not to check required fields\n/ must be consistent about it.  That is, for any particular sub-message, the\n/ implementation must either *always* check its required fields, or *never*\n/ check its required fields, regardless of whether or not the message has\n/ been parsed.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 4],
        "span": [529, 2, 47],
        "leadingComments":
          "/ Is this field deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for accessors, or it will be completely ignored; in the very least, this\n/ is a formalization for deprecating fields.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 5],
        "span": [532, 2, 42],
        "leadingComments": "/ For Google-internal migration only. Do not use.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 6],
        "span": [536, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 5],
        "span": [539, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 0],
        "span": [546, 2, 32],
        "leadingComments": "/ Set this option to true to allow mapping different tag names to the same\n/ value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 1],
        "span": [552, 2, 47],
        "leadingComments":
          "/ Is this enum deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for the enum, or it will be completely ignored; in the very least, this\n/ is a formalization for deprecating enums.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 2],
        "span": [555, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 5],
        "span": [558, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 0],
        "span": [566, 2, 47],
        "leadingComments":
          "/ Is this enum value deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for the enum value, or it will be completely ignored; in the very least,\n/ this is a formalization for deprecating enum values.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 1],
        "span": [569, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 5],
        "span": [572, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 2, 0],
        "span": [586, 2, 48],
        "leadingComments":
          "/ Is this service deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for the service, or it will be completely ignored; in the very least,\n/ this is a formalization for deprecating services.\n",
        "trailingComments": "",
        "leadingDetachedComments": [
          "/ Note:  Field numbers 1 through 32 are reserved for Google's internal RPC\n/   framework.  We apologize for hoarding these numbers to ourselves, but\n/   we were already using them long before we decided to release Protocol\n/   Buffers.\n",
        ],
      }, {
        "path": [4, 14, 2, 1],
        "span": [589, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 5],
        "span": [592, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15, 2, 0],
        "span": [606, 2, 48],
        "leadingComments":
          "/ Is this method deprecated?\n/ Depending on the target platform, this can emit Deprecated annotations\n/ for the method, or it will be completely ignored; in the very least,\n/ this is a formalization for deprecating methods.\n",
        "trailingComments": "",
        "leadingDetachedComments": [
          "/ Note:  Field numbers 1 through 32 are reserved for Google's internal RPC\n/   framework.  We apologize for hoarding these numbers to ourselves, but\n/   we were already using them long before we decided to release Protocol\n/   Buffers.\n",
        ],
      }, {
        "path": [4, 15, 2, 1],
        "span": [609, 2, 58],
        "leadingComments": "/ The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15, 5],
        "span": [612, 2, 25],
        "leadingComments": "/ Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16],
        "span": [622, 0, 642, 1],
        "leadingComments":
          "/ A message representing a option the parser does not recognize. This only\n/ appears in options protos created by the compiler::Parser class.\n/ DescriptorPool resolves these when building Descriptor objects. Therefore,\n/ options protos in descriptor objects (e.g. returned by Descriptor::options(),\n/ or produced by Descriptor::CopyTo()) will never have UninterpretedOptions\n/ in them.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16, 3, 0],
        "span": [628, 2, 631, 3],
        "leadingComments":
          '/ The name of the uninterpreted option.  Each string represents a segment in\n/ a dot-separated name.  is_extension is true iff a segment represents an\n/ extension (denoted with parentheses in options specs in .proto files).\n/ E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents\n/ "foo.(bar.baz).qux".\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16, 2, 1],
        "span": [636, 2, 39],
        "leadingComments":
          "/ The value of the uninterpreted option, in whatever type the tokenizer\n/ identified it as during parsing. Exactly one of these should be set.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17],
        "span": [649, 0, 778, 1],
        "leadingComments":
          "/ Encapsulates information about the original source file from which a\n/ FileDescriptorProto was generated.\n",
        "trailingComments": "",
        "leadingDetachedComments": [
          "/ ===================================================================\n/ Optional source code info\n",
        ],
      }, {
        "path": [4, 17, 2, 0],
        "span": [693, 2, 33],
        "leadingComments":
          '/ A Location identifies a piece of source code in a .proto file which\n/ corresponds to a particular definition.  This information is intended\n/ to be useful to IDEs, code indexers, documentation generators, and similar\n/ tools.\n\n/ For example, say we have a file like:\n/   message Foo {\n/     optional string foo = 1;\n/   }\n/ Let\'s look at just the field definition:\n/   optional string foo = 1;\n/   ^       ^^     ^^  ^  ^^^\n/   a       bc     de  f  ghi\n/ We have the following locations:\n/   span   path               represents\n/   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.\n/   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).\n/   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).\n/   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).\n/   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).\n\n/ Notes:\n/ - A location may refer to a repeated field itself (i.e. not to any\n/   particular index within it).  This is used whenever a set of elements are\n/   logically enclosed in a single code segment.  For example, an entire\n/   extend block (possibly containing multiple extension definitions) will\n/   have an outer location whose path refers to the "extensions" repeated\n/   field without an index.\n/ - Multiple locations may have the same path.  This happens when a single\n/   logical declaration is spread out across multiple places.  The most\n/   obvious example is the "extend" block again -- there may be multiple\n/   extend blocks in the same scope, each of which will have the same path.\n/ - A location\'s span is not always a subset of its parent\'s span.  For\n/   example, the "extendee" of an extension declaration appears at the\n/   beginning of the "extend" block and is shared by all extensions within\n/   the block.\n/ - Just because a location\'s span is a subset of some other location\'s span\n/   does not mean that it is a descendent.  For example, a "group" defines\n/   both a type and a field in a single declaration.  Thus, the locations\n/   corresponding to the type and field and their components will overlap.\n/ - Code which tries to interpret locations should probably be designed to\n/   ignore those that it doesn\'t understand, as more types of locations could\n/   be recorded in the future.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 3, 0, 2, 0],
        "span": [718, 4, 42],
        "leadingComments":
          "/ Identifies which part of the FileDescriptorProto was defined at this\n/ location.\n\n/ Each element is a field number or an index.  They form a path from\n/ the root FileDescriptorProto to the place where the definition.  For\n/ example, this path:\n/   [ 4, 3, 2, 7, 1 ]\n/ refers to:\n/   file.message_type(3)  /// 4, 3\n/       .field(7)         /// 2, 7\n/       .name()           /// 1\n/ This is because FileDescriptorProto.message_type has field number 4:\n/   repeated DescriptorProto message_type = 4;\n/ and DescriptorProto.field has field number 2:\n/   repeated FieldDescriptorProto field = 2;\n/ and FieldDescriptorProto.name has field number 1:\n/   optional string name = 1;\n\n/ Thus, the above path gives the location of a field name.  If we removed\n/ the last element:\n/   [ 4, 3, 2, 7 ]\n/ this path refers to the whole field declaration (from the beginning\n/ of the label to the terminating semicolon).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 3, 0, 2, 1],
        "span": [725, 4, 42],
        "leadingComments":
          "/ Always has exactly three or four elements: start line, start column,\n/ end line (optional, otherwise assumed same as start line), end column.\n/ These are packed into a single field for efficiency.  Note that line\n/ and column numbers are zero-based -- typically you will want to add\n/ 1 to each before displaying to a user.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 3, 0, 2, 2],
        "span": [774, 4, 41],
        "leadingComments":
          "/ If this SourceCodeInfo represents a complete declaration, these are any\n/ comments appearing before and after the declaration which appear to be\n/ attached to the declaration.\n\n/ A series of line comments appearing on consecutive lines, with no other\n/ tokens appearing on those lines, will be treated as a single comment.\n\n/ leading_detached_comments will keep paragraphs of comments that appear\n/ before (but not connected to) the current element. Each paragraph,\n/ separated by empty lines, will be one comment element in the repeated\n/ field.\n\n/ Only the comment content is provided; comment markers (e.g. //) are\n/ stripped out.  For block comments, leading whitespace and an asterisk\n/ will be stripped from the beginning of each line other than the first.\n/ Newlines are included in the output.\n\n/ Examples:\n\n/   optional int32 foo = 1;  /// Comment attached to foo.\n/   /// Comment attached to bar.\n/   optional int32 bar = 2;\n\n/   optional string baz = 3;\n/   /// Comment attached to baz.\n/   /// Another line attached to baz.\n\n/   /// Comment attached to qux.\n/   //\n/   /// Another line attached to qux.\n/   optional double qux = 4;\n\n/   /// Detached comment for corge. This is not leading or trailing comments\n/   /// to qux or corge because there are blank lines separating it from\n/   /// both.\n\n/   /// Detached comment for corge paragraph 2.\n\n/   optional string corge = 5;\n/   /* Block comment attached\n/    * to corge.  Leading asterisks\n/    * will be removed. */\n/   /* Block comment attached to\n/    * grault. */\n/   optional int32 grault = 6;\n\n/   /// ignored detached comments.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18],
        "span": [783, 0, 804, 1],
        "leadingComments":
          "/ Describes the relationship between generated code and its original source\n/ file. A GeneratedCodeInfo message is associated with only one generated\n/ source file, but may contain references to different source .proto files.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 2, 0],
        "span": [786, 2, 37],
        "leadingComments":
          "/ An Annotation connects some span of text in generated code to an element\n/ of its generating .proto file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 3, 0, 2, 0],
        "span": [790, 4, 42],
        "leadingComments":
          "/ Identifies the element in the original source .proto file. This field\n/ is formatted the same as SourceCodeInfo.Location.path.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 3, 0, 2, 1],
        "span": [793, 4, 36],
        "leadingComments": "/ Identifies the filesystem path to the original source .proto.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 3, 0, 2, 2],
        "span": [797, 4, 29],
        "leadingComments":
          "/ Identifies the starting offset in bytes in the generated code\n/ that relates to the identified object.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 3, 0, 2, 3],
        "span": [802, 4, 27],
        "leadingComments":
          "/ Identifies the ending offset in bytes in the generated code that\n/ relates to the identified offset. The end offset should be one past\n/ the last relevant byte (so the length of the text = end - begin).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "",
  }),
  references: {
    ".google.protobuf.FileDescriptorSet": FileDescriptorSet,
    ".google.protobuf.FileDescriptorProto": FileDescriptorProto,
    ".google.protobuf.DescriptorProto": DescriptorProto,
    ".google.protobuf.DescriptorProto.ExtensionRange": DescriptorProto_ExtensionRange,
    ".google.protobuf.DescriptorProto.ReservedRange": DescriptorProto_ReservedRange,
    ".google.protobuf.FieldDescriptorProto": FieldDescriptorProto,
    ".google.protobuf.FieldDescriptorProto.Type": FieldDescriptorProto_Type,
    ".google.protobuf.FieldDescriptorProto.Label": FieldDescriptorProto_Label,
    ".google.protobuf.OneofDescriptorProto": OneofDescriptorProto,
    ".google.protobuf.EnumDescriptorProto": EnumDescriptorProto,
    ".google.protobuf.EnumValueDescriptorProto": EnumValueDescriptorProto,
    ".google.protobuf.ServiceDescriptorProto": ServiceDescriptorProto,
    ".google.protobuf.MethodDescriptorProto": MethodDescriptorProto,
    ".google.protobuf.FileOptions": FileOptions,
    ".google.protobuf.FileOptions.OptimizeMode": FileOptions_OptimizeMode,
    ".google.protobuf.MessageOptions": MessageOptions,
    ".google.protobuf.FieldOptions": FieldOptions,
    ".google.protobuf.FieldOptions.CType": FieldOptions_CType,
    ".google.protobuf.FieldOptions.JSType": FieldOptions_JSType,
    ".google.protobuf.EnumOptions": EnumOptions,
    ".google.protobuf.EnumValueOptions": EnumValueOptions,
    ".google.protobuf.ServiceOptions": ServiceOptions,
    ".google.protobuf.MethodOptions": MethodOptions,
    ".google.protobuf.UninterpretedOption": UninterpretedOption,
    ".google.protobuf.UninterpretedOption.NamePart": UninterpretedOption_NamePart,
    ".google.protobuf.SourceCodeInfo": SourceCodeInfo,
    ".google.protobuf.SourceCodeInfo.Location": SourceCodeInfo_Location,
    ".google.protobuf.GeneratedCodeInfo": GeneratedCodeInfo,
    ".google.protobuf.GeneratedCodeInfo.Annotation": GeneratedCodeInfo_Annotation,
  },
  dependencies: [],
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
