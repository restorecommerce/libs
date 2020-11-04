import  { Facade } from '../src/index';
import { createTestFacade } from './facade';

let facade: Facade;

beforeAll(async () => {
  facade = createTestFacade();
  await facade.start();
});

it('should start the facade', () => {
  expect(facade).toBeTruthy();
  expect(facade.listening).toBe(true);
});

afterAll(async () => {
  await facade && facade.stop();
})

// it('test', async () => {
  // const serviceConfig = createServiceConfig(__dirname);
  // const identityClient = new IdentitySrvGrpcClient(serviceConfig.get('identity').client);


  // expect(identityClient).toBeTruthy();

  // const resourcesClient = new ResourcesSrvGrpcClient(serviceConfig.get('resources').client);


  // const resultRegister = await identityClient.user.Register(RegisterRequest.fromPartial({
  //   name: 'testuser2',
  //   password: 'testpassword2',
  //   email: 'testuser2@foo.de',
  //   firstName: 'foo',
  //   lastName: 'bar'
  // }));

  // console.log(resultRegister);


  // const resultFind = await identityClient.user.Find(FindRequest.fromPartial({
  //   name: 'testuser2'
  // }));

  // console.log(resultFind);

  // const resultActivate = await identityClient.user.Activate({
  //   name: 'testuser2',
  //   activationCode: '2ab80f3dfd8740c1a637ec3276559db5'
  // });
  // console.log(resultActivate);


  // const resultLogin = await identityClient.user.Login(LoginRequest.fromPartial({
  //   identifier: 'testuser2',
  //   // password: 'testpassword2',
  //   token: 'testpassword2'
  // }));

  // console.log(resultLogin);
// });


