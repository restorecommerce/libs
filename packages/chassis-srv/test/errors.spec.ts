import * as should from 'should';
import {forEach, forEachObj} from 'remeda';
import { errors } from '../src/index.js';
import { it, describe } from 'vitest';

/* global describe it */

describe('error', () => {
  forEachObj(errors, (Error, name) => {
    describe(name, () => {
      it('should be an Error', () => {
        const error = new Error(name);
        should.exist(error);
        error.should.be.Error();
        error.name.should.equal(name);
        should.exist(error.stack);
      });
    });
  });
});
