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
