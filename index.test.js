import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { isSepaCountry, getCurrencyOfSepaCountry } from "./index.js";

describe("isSepaCountry", () => {
  test("should return true for SEPA countries", () => {
    assert(isSepaCountry("AL"));
    assert(isSepaCountry("IS"));
  });

  test("should return false for non SEPA countries", () => {
    assert(!isSepaCountry("AU"));
    assert(!isSepaCountry("UA"));
  });

  test("should return false for non string and non ISO country codes", () => {
    assert(!isSepaCountry(null));
    assert(!isSepaCountry("EUR"));
  });
});

describe("getCurrencyOfSepaCountry", () => {
  test("should return country currency for SEPA countries only", () => {
    assert.equal(getCurrencyOfSepaCountry("AT"), "EUR");
    assert.equal(getCurrencyOfSepaCountry("IS"), "ISK");
  });

  test("should return undefined for non SEPA countries", () => {
    assert.equal(getCurrencyOfSepaCountry("AU"), undefined);
    assert.equal(getCurrencyOfSepaCountry("UA"), undefined);
  });

  test("should return undefined for non string and non ISO country codes", () => {
    assert.equal(getCurrencyOfSepaCountry(null), undefined);
    assert.equal(getCurrencyOfSepaCountry("EUR"), undefined);
  });
});
