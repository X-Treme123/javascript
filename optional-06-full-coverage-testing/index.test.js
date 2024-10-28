import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// Uji coba dengan 2 bilangan positif
test(`Menambahkan 2 bilangan positif`, () => {
  assert.strictEqual(sum(1, 2), 3);
});

//Uji coba dengan 2 bilangan nolc
test(`Menambahkan 2 bilangan nol`, () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Uji coba dengan bilangan positif dan negatif atau sebaliknya
test(`Menambah 1 bilangan positif dan 1 bilangan negatif atau sebaliknya`, () => {
  assert.strictEqual(sum(1, -1), 0);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(5, -5), 0);
});

// Uji coba menggunakan tipe data selain angka
test("Menggunakan tipe data selain angka", () => {
  assert.strictEqual(sum("a", 5), 0);
  assert.strictEqual(sum(3, "b"), 0);
  assert.strictEqual(sum(true, false), 0);
});

// Uji coba ketika salah satu parameter undefined
test("Salah satu atau kedua parameter tidak ada", () => {
  assert.strictEqual(sum(), 0);
  assert.strictEqual(sum(5), 0);
  assert.strictEqual(sum(undefined, 3), 0);
});
