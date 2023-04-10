let subtract = (a, b) => {
  return a - b;
};

let add = (a, b) => {
  return a + b;
};

let multiply = (a, b) => {
  return a * b;
};

//Functions are called as first level citizens
let calculator = (a, b, anyFunction) => {
    console.log("Received A :- ", a);
    console.log("Received B :- ", b);
    console.log("Received callBack :- ", anyFunction);
    let result = anyFunction(24, 5);
    console.log("Result is :- ", result);
}

calculator(24, 12, subtract);
calculator(24, 12, add);
calculator(24, 12, multiply);