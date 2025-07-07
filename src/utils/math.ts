import { MIN_NUMBER, MAX_NUMBER } from '../constants';

export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

export function generateRandomPrime(min: number = MIN_NUMBER, max: number = MAX_NUMBER): number {
  let candidate: number;
  do {
    candidate = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (!isPrime(candidate));
  return candidate;
}