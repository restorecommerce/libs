import { facade } from './facade.js';
import { agent } from 'supertest';
import { it, describe, beforeAll, afterAll, expect } from 'vitest';
import { mockServices, cfg, GrpcMockServer } from './utils.js';

let mockedServices: GrpcMockServer[];
describe('extend', () => {
  beforeAll(async () => {
    await facade.start();
    mockedServices = await mockServices(cfg.get('client'));
  });

  it('should start the facade', () => {
    expect(facade).toBeTruthy();
    expect(facade.listening).toBe(true);
  });

  it('should request a token', () => {
    const request = agent(facade.server);
    const params = new URLSearchParams({
      identifier: 'superadmin',
      password: 'CNQJrH%KAayeDpf3h',
      grant_type: 'password',
      scope: 'openid',
    }).toString();
    return new Promise<void>((resolve, reject) => {
      request
        .post('/token')
        .send(params)
        .set('Authorization', 'Basic VEVTVF9DTElFTlRfSUQ6VEVTVF9DTElFTlRfU0VDUkVU=')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            reject(err);
          }
          try {
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body.id_token).toBeDefined();
          } catch(err) {
            reject(err);
          }
          resolve();
        });
    });
  });

  afterAll(async () => {
    await Promise.allSettled(mockedServices.map(
      (ms) => ms.stop()
    ));
    await facade.stop();
  });
});