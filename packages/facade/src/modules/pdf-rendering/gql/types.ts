import {
  protoMetadata as metaPackageIoRestorecommercePdfRendering
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/pdf_rendering.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommercePdfRendering
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
