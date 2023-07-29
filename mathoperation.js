// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function result(operation, val1, val2) {
  switch (operation) {
    case "+":
      return val1 + val2;
      break;
    case "-":
      return val1 - val2;
      break;
    case "*":
      return val1 * val2;
      break;
    case "/":
      return val1 / val2;
      break;
    default:
      return 0;
  }
}

// result("+", 6, 9)  ==> 15
// result("-", 3, 5)  ==> -2
// result("*", 7, 3)  ==> 21
// result("/", 4, 16) ==> 0.25
