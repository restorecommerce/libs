import { facade } from './facade.js';
import { describe, it, beforeAll, afterAll, expect } from 'vitest';

describe('facade', () => {
  beforeAll(async () => {
    await facade.start();
  });

  it('should start the facade', () => {
    expect(facade).toBeTruthy();
    expect(facade.listening).toBe(true);
  });

  afterAll(async () => {
    await facade.stop();
  });
});
