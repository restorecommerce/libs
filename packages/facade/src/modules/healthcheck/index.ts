// import * as health from '@cloudnative/health';
// import { State } from '@cloudnative/health';
// import { Client } from '@grpc/grpc-js';
// import { Context } from '@restorecommerce/identity-srv-grpc-client/generated/io/restorecommerce/access_control';
// import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-client';
// import { FacadeContext } from '.';
// // import { builder } from './builder';
// // import App from './app';
// // import { Context } from 'koa';
// // import { cfg } from './config';
// // // import { grpcClient } from '@restorecommerce/grpc-client';
// // import logger from './logger';


// const router = new Router<any, any>();

// router.all('/live', LivenessEndpoint(this.healthcheck));
// router.all('/ready', ReadinessEndpoint(this.healthcheck));
// router.all('/health', HealthEndpoint(this.healthcheck));

// koa.use(router.routes());

// class MicroserviceCheck extends health.Plugin {

//   constructor(service: string, startup = false) {
//     super((startup ? 'startup_' : '') + 'microservice_' + service);

//     this.promise = this.wrapPromise(() => new Promise<void>((resolve, reject) => {
//       const services = builder.getMicroservices().microservice.service;
//       if (services[service]) {
//         // TODO Check for all expected functions
//         resolve();
//       } else {
//         if (!startup) {
//           reject({
//             message: 'service missing'
//           });
//         }
//       }
//     }), State.UP, State.DOWN);
//   }

//   public runCheck() {
//     return this.promise();
//   }

// }

// export const setupHealthChecks = (healthChecker: health.HealthChecker, app: App) => {
//   healthChecker.registerStartupCheck(
//     new health.StartupCheck('listen', () => new Promise<void>((resolve) => {
//       if (app.listening) {
//         resolve();
//       }
//     }))
//   );

//   for (let service in builder.getMicroservices().microservice.service) {
//     healthChecker.registerStartupCheck(new MicroserviceCheck(service, true));
//     healthChecker.registerLivenessCheck(new MicroserviceCheck(service, false));
//   }
// };

// export const grpcUpstreamHealth = (clients: RestoreCommerceGrpcClient[]): (ctx: Context, next: () => void) => void => {
//   return (ctx: Context, next: () => void) => {



//     return Promise.all(clients.map(async (client) => {
//       client.command.Command()

//       const value = Buffer.from(JSON.stringify({service: 'test'})).toString('base64');
//       const response = await client.command.Command({
//         name: 'health_check',
//         payload: {
//           type_url: 'payload',
//           value
//         }
//       });

//       response.value.toString();

//       const x = Buffer.from(response.value, 'base64').toString();

//       response.value
//         if ('data' in response && 'value' in response.data) {
//           const decoded = Buffer.from(response.data.value, 'base64').toString();
//           return {
//             data: JSON.parse(decoded),
//             service
//           };
//         }

//         return {
//           service,
//           data: {
//             response,
//             addr: configs[service]['addr']
//           }
//         };


//     })


//     return Promise.all(Object.keys(configs).map((service) => {
//       const client = new grpcClient(configs[service], logger);
//       const command = client.makeEndpoint('command', configs[service]['addr']);
//       const value = new Buffer(JSON.stringify({service})).toString('base64');
//       const fullPayload = {name: 'health_check', payload: {type_url: 'payload', value}};

//       logger.silly('[' + configs[service]['addr'] + '] Executing: ' + JSON.stringify(fullPayload));

//       return command(fullPayload).then((response) => {
//         if ('data' in response && 'value' in response.data) {
//           const decoded = Buffer.from(response.data.value, 'base64').toString();
//           return {
//             data: JSON.parse(decoded),
//             service
//           };
//         }

//         return {
//           service,
//           data: {
//             response,
//             addr: configs[service]['addr']
//           }
//         };
//       });
//     })).then((data) => {
//       data = data.reduce((obj, val) => {
//         obj[val['service']] = val['data'];
//         return obj;
//       }, {});
//       ctx.type = 'application/json';
//       ctx.body = JSON.stringify(data);
//       return next();
//     }).catch(() => next());
//   };
// };
// //
