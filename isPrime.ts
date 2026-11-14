/**
 * 🤖
 * This file was created with AI
 *
 * Harness: Claude Code
 * Session Id: session_01LCLeLkdCJFv6FVQXJmmFtF
 *
 * Humans: add your notes here
 */

/** Returns true when `n` is a prime number. */
export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
