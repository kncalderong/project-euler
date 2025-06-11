function largestPrimeFactor(number) {
  const primeFactors = [];
  let factor = 2;
  let remainder = number;

  while (remainder > 1 && factor <= number) {
    if (remainder % factor === 0) {
      if (isPrime(factor)) {
        primeFactors.push(factor);
        remainder = remainder / factor;
      }
    }
    factor += 1;
  }
  return primeFactors.length > 0 ? primeFactors[primeFactors.length - 1] : 1;
}

console.log(largestPrimeFactor(16));

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/* ==================
    Alternative 1
  ================== */

// If factor divides remainder, and you keep dividing out all occurrences of that factor, the remaining number will automatically be prime at the end.

/* function largestPrimeFactor(n) {
  let factor = 2;
  while (factor * factor <= n) {
    if (n % factor === 0) {
      n = n / factor;
    } else {
      factor += 1;
    }
  }
  return n;
} */
