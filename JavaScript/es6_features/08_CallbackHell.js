let subtractFun = (a, b) => {
  return a - b;
};

let additionFun = (a, b) => {
  return a + b;
};

let calculate = (a, b, anyFunction) => {
  let result = anyFunction(24, 5);
  console.log("Result is :- ", result);
};

//Usecase :- Multiplication -> Addition -> Subtraction
let operate = (a, b) => {
  //calculate(a, b, subtractFun);
  calculate(a, b, function () {
    calculate(a, b, function () {
      calculate(a, b, function () {
        return a * b;
      });
      return a + b;
    });
    return a - b;
  });
};

operate(34, 15);

//Usecase :- Division -> Addition -> Multiplication -> Subtraction