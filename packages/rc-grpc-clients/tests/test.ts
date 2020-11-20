import { Subject } from 'rxjs';
import { IdentitySrvGrpcClient, RegisterRequest, FindRequest, UserType, LoginRequest, ServerReflectionRequest, DeleteRequest } from '../src/index';


describe('identity client', () => {
  let identityClient: IdentitySrvGrpcClient;

  beforeAll(() => {
    identityClient = new IdentitySrvGrpcClient({
      address: '127.0.0.1:50051'
    });
  })

  it('can be instantiated', (done) => {
    expect(identityClient).toBeInstanceOf(IdentitySrvGrpcClient);
    done();
  });

  it('should register and delete a user', async () => {

    // const resultFind = await identityClient.user.Find(FindRequest.fromPartial({
    //   name: 'testuser2'
    // }));

    // console.log(resultFind);


    // const resultRegister = await identityClient.user.Register(RegisterRequest.fromPartial({
    //   name: 'testuser2',
    //   password: 'testpassword',
    //   email: 'testuser2@foo.de',
    //   firstName: 'foo',
    //   lastName: 'bar',
    //   // userType: UserType.INDIVIDUAL_USER,

    // }));

    // console.log(resultRegister);
    // expect(resultRegister.name).toStrictEqual('testuser');


    // const resultDelete = await identityClient.user.Delete(DeleteRequest.fromPartial({
    //   ids: ['x']
    // }));


    // console.log(resultDelete);

    // const resultFind = await identityClient.user.Find(FindRequest.fromPartial({
    //   name: 'testuser'
    // }));

    // console.log(resultFind);

    // const resultActivate = await identityClient.user.Activate({
    //   name: 'testuser2',
    //   activationCode: 'e6b29fc410ad47e2ae674348aef46317',
    //   subject: {
    //     id: '',
    //     token: '',
    //     scope: '',
    //     unauthenticated: true
    //   }
    // });
    // console.log(resultActivate);


    const resultLogin = await identityClient.user.Login(LoginRequest.fromPartial({
      identifier: 'testuser',
      password: 'testpassword',
    }));

    console.log(resultLogin);
  });
});



// result.subscribe(x => {
//   console.log(x.listServicesResponse?.service);
//   done();
// });

// req.next(ServerReflectionRequest.fromPartial({
//   listServices: 'a'

// }));
