function fiboEvenSum(n) {
  if (n < 3) return 2;
  const FibonacciNumbers = [1, 2];
  let control = 0;
  while (control < n) {
    //sum last two digits
    control = FibonacciNumbers.slice(-2).reduce((acc, cur) => acc + cur, 0);
    control <= n && FibonacciNumbers.push(control);
  }
  return FibonacciNumbers.reduce((acc, cur) => {
    return cur % 2 === 0 ? cur + acc : acc;
  }, 0);
}

/* ==================
    Alternative 1
  ================== */

//It only keeps two numbers in memory at any time.
//No need to store an array or use slice or reduce.
//More performant and still very readable.
function fiboEvenSum2(n) {
  let a = 1,
    b = 2,
    sum = 0;
  while (b <= n) {
    if (b % 2 === 0) sum += b;
    [a, b] = [b, a + b]; // update Fibonacci numbers
  }
  return sum;
}

/* ==================
    Alternative 2
  ================== */

// This is based on the fact that every third Fibonacci number is even, and the recurrence relation for even Fibs is E(n) = 4 * E(n-1) + E(n-2).
function fiboEvenSum3(n) {
  let a = 2,
    b = 8,
    sum = 2; // Starting with even Fibs: 2, 8, ...
  while (b <= n) {
    sum += b;
    [a, b] = [b, 4 * b + a]; // Pattern: next_even = 4 * current + previous
  }
  return sum;
}
