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
