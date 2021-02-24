import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice";
import { registerPackagesRecursive } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(protoMetadata);
}
