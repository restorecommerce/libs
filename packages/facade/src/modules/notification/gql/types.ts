import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification";
import { registerPackagesRecursive } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(protoMetadata);
}
