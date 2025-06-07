function multiplesOf3Or5(number) {
  const multiples = [];
  for (let n = 1; n < number; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      multiples.push(n);
    }
  }
  const result = multiples.reduce((acc, cur) => {
    return cur + acc;
  }, 0);
  return result;
}

console.log(multiplesOf3Or5(1000));
