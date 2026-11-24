import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("slugify lowercases and joins words with dashes", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});
