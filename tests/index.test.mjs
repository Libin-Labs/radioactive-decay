import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('one half life', () => {
  assert.equal(api.remaining(100, 5, 5), 50);
});
test('two half lives', () => {
  assert.equal(api.remaining(100, 10, 5), 25);
});
test('inverse fraction', () => {
  assert.equal(api.elapsedForFraction(0.25, 5), 10);
});
test('initial and unit fraction', () => {
  assert.equal(api.remaining(100, 0, 5), 100);
  assert.equal(api.elapsedForFraction(1, 5), 0);
});
test('underflow allowed', () => {
  assert.equal(api.remaining(100, 10000, 1), 0);
  assert.equal(api.remaining(0, 1, 1), 0);
});
test('invalid domains', () => {
  assert.throws(() => api.remaining(1, -1, 1));
  assert.throws(() => api.remaining(1, 1, 0));
  assert.throws(() => api.elapsedForFraction(0, 1));
  assert.throws(() => api.elapsedForFraction(2, 1));
});
