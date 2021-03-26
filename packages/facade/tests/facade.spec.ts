import { AddressInfo } from 'net';
import { facade } from './facade';

let url

beforeAll(async () => {
  await facade.start();
  const a  = facade.address as AddressInfo;
  url = a.address + ':' + a.port;
});


it('should start the facade', () => {
  expect(facade).toBeTruthy();
  expect(facade.listening).toBe(true);
});

afterAll(async () => {
  await facade && facade.stop();
});
