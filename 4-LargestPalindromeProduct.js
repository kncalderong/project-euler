function largestPalindromeProduct(n) {
  let referenceNumber = "";

  for (let x = 0; x < n; x++) {
    referenceNumber = referenceNumber.concat("9");
  }
  referenceNumber = +referenceNumber;
  let secondNumber = referenceNumber;
  let minNumber,
    palindrome = undefined;

  while (referenceNumber > 0 && minNumber !== referenceNumber) {
    const product = referenceNumber * secondNumber;
    const result = isPalindrome(`${product}`);
    if (result || secondNumber === minNumber) {
      if (result) {
        if (product > palindrome || !palindrome) {
          palindrome = product;
        }
      }
      minNumber = secondNumber;
      referenceNumber -= 1;
      secondNumber = referenceNumber;
    } else {
      secondNumber -= 1;
    }
  }
  return palindrome;
}

console.log(largestPalindromeProduct(3));

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
