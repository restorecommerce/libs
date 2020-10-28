import { loadSync as protoLoaderLoadSync, Options as ProtoLoaderOptions } from '@grpc/proto-loader';
import { Server, ServerCredentials, loadPackageDefinition, UntypedServiceImplementation } from "@grpc/grpc-js";
import { ChannelOptions } from "@grpc/grpc-js/build/src/channel-options";

function getProtoFromPkgDefinition(pkgName: string, pkgDef: any): any {
  const pathArr: string[] = pkgName.split(".");
  return pathArr.reduce((obj, key) => {
      return (obj && obj[key] !== "undefined") ? obj[key] : undefined;
  }, pkgDef);
}

export interface MockServiceArgs {
  protoPath: string | string[];
  packageName: string;
  serviceName: string;
  implementations: UntypedServiceImplementation;
  protoRoot?: string;
  protoOptions?: ProtoLoaderOptions;
}

export class GrpcMockServer {
  readonly server: Server;
  private _port: number = 0;
  private initialized = false;

  get port() {
    return this._port;
  }

  constructor(private address: string, channelOptions?: ChannelOptions) {
    this.server = new Server(channelOptions);
  }

  public addService({
    protoPath,
    packageName,
    serviceName,
    implementations,
    protoRoot
    // protoOptions
  }: MockServiceArgs): GrpcMockServer {
    const pkgDef: any = loadPackageDefinition(
      protoLoaderLoadSync(protoPath, {
        includeDirs: protoRoot ? [protoRoot] : [],
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
    );

    const proto: any = getProtoFromPkgDefinition(packageName, pkgDef);

    if (!proto) {
      throw new Error("Seems like the package name is wrong.");
    }

    if (!proto[serviceName]) {
      throw new Error("Seems like the service name is wrong.");
    }

    const service: any = proto[serviceName].service;
    this.server.addService(service, implementations);
    return this;
  }

  public async start(): Promise<number> {
    let $;
    if (!this.initialized) {
      this.initialized = true;

      console.log("initializing gRPC mock server ...");
      try {
        this._port = await new Promise((resolve, reject) => {
          this.server.bindAsync(this.address, ServerCredentials.createInsecure(), (err, port) => {
            if (err) {
              reject(err);
            } else {
              resolve(port);
            }
          });
        });
      } catch (ex) {
        console.error('gRPC mock server error', ex);
      }
    }

    this.server.start();
    console.log('gRPC mock server running on port ' + this.port);
    return this.port;
  }

  public stop() {
    // log.debug("Stopping gRPC mock server ...");
    return new Promise((resolve, reject) => {
      this.server.tryShutdown((err) => {
        if (err) {
          this.server.forceShutdown();
        }
        resolve();
      });
    })
  }
}
