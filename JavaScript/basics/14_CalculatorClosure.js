// Question :- Implement calculator which holds result all the time!

// Addition ->
// Subtraction ->
// Division ->
// Multiplication ->

function calculator() {
  let result = 0;

  function add(num) {
    console.log("After ", result, "+", num, " = " + (result + num));
    result += num;
  }

  function subtract(num) {
    console.log("After ", result, "-", num, " = " + (result - num));
    result -= num;
  }

  function multiply(num) {
    console.log("After ", result, "*", num, " = " + result * num);
    result *= num;
  }

  function divide(num) {
    if (num === 0) {
      throw new Error("Division by zero!");
    }
    console.log("After ", result, "/", num, " = " + result / num);
    result /= num;
  }

  function clear() {
    result = 0;
    return clear;
  }

  function getResult() {
    return result;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getResult,
  };
}

const calculateObject = calculator();
console.log("Current Result Value :- ", calculateObject.getResult());
calculateObject.add(10);
calculateObject.multiply(8);
calculateObject.subtract(15);
calculateObject.divide(5);
console.log("Current Result Value :- ", calculateObject.getResult());
calculateObject.clear();
console.log("Current Result Value :- ", calculateObject.getResult());
