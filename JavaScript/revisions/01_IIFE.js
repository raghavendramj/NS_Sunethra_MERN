//Normal function
function add(a, b) {
  let result = a + b;
  console.log("Normal function - Result :- ", result);
  return result;
}

//Function Expression
let addFE = function (a, b) {
  let result = a + b;
  console.log("Function Expression - Result :- ", result);
  return result;
};

add(10, 20); //Function Object
addFE(10, 20); //Function Object

// This is the general syntax for defining an IIFE:
(function () {
  //...
})();

// Immediately Invoked Function Expression
let resultViaIIFE = (function (a, b) {
  let result = a + b;
  return result;
})(10, 20);

console.log("IIFE - Result :- ", resultViaIIFE); //Value

let counter = 10;

(function () {
  //Private to this IIFE
  let counter = 0;

  //Private to this IIFE
  function add(a, b) {
    let result = a + b;
    console.log("INSIDE IIFE - Result :- ", result);
    return result;
  }
  counter = 24;
  console.log("INSIDE IIFE - Value of counter ", counter);
  add(23, 24);
})();

console.log("Value of counter ", counter);
