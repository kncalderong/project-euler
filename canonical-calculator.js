function calculate(expression) {
  const OPERATORS = ["+", "-", "*", "/"];
  if (expression.length === 1 && !isNaN(expression)) return +expression;
  if (expression.length < 3) return 0;

  const elements = expression.split(" ");
  let total = 0,
    operator,
    firstNumber,
    secondNumber;

  while (elements.length > 2) {
    operator = findLastIndex(elements, (element) =>
      OPERATORS.includes(element)
    );
    firstNumber = parseFloat(elements[operator + 1]);
    secondNumber = parseFloat(elements[operator + 2]);
    total = applyOp(elements[operator], firstNumber, secondNumber);
    elements.splice(operator, 3, total.toString());
  }
  return total;
}

function applyOp(op, a, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error("Unknown operator");
  }
}

function findLastIndex(arr, predicate) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

console.log(calculate("- 3 * 4 5"));
