import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Uji skenario normal
test('sum(1, 2) should return 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

// Uji skenario dengan bilangan nol
test('sum(0, 0) should return 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Uji skenario dengan bilangan negatif
test('sum(-1, -1) should return -2', () => {
  assert.strictEqual(sum(-1, -1), -2);
});

// Uji skenario dengan bilangan negatif dan positif
test('sum(-5, 5) should return 0', () => {
  assert.strictEqual(sum(-5, 5), 0);
});

// Uji skenario dengan bilangan desimal
test('sum(1.5, 2.5) should return 4', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});
