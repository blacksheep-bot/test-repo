/**
 * 🤖
 * This file was created with AI
 *
 * Harness: Claude Code
 * Session Id: session_01LCLeLkdCJFv6FVQXJmmFtF
 *
 * Humans: add your notes here
 */

import { describe, expect, test } from "bun:test";
import { isPrime } from "./isPrime";

describe("isPrime", () => {
  test("primes", () => {
    for (const n of [2, 3, 5, 7, 11, 13, 97, 7919]) expect(isPrime(n)).toBe(true);
  });
  test("non-primes", () => {
    for (const n of [-7, 0, 1, 4, 9, 25, 49, 91, 7917]) expect(isPrime(n)).toBe(false);
  });
  test("non-integers", () => {
    for (const n of [2.5, NaN, Infinity]) expect(isPrime(n)).toBe(false);
  });
});
