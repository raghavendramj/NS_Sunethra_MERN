//Normal function
function add(a, b) {
  return a + b;
}
console.log("NormalFunctiion :- Sum is :- ", add(10, 23));

//Function expression
var addNumbers = function (a, b) {
  var result = a + b;
  console.log("Function Expression :- Result :- ", result);
  return result;
};
addNumbers(12, 34);

//Syntax :- IIFE
(function () {
  //...
})();

//Immediately Invoked Function Expression
(function (a, b) {
  var result = a + b;
  console.log("IIFE :- Result :- ", result);
  return result;
})(24, 56);

//Polluting global variables.
var counter = 0;
console.log("1. Counter :- ", counter);
function test() {
  var counter = 12;
  console.log("2. Counter :- ", counter);
}
test();
console.log("3. Counter :- ", counter);
