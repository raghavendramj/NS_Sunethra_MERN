// function -> block of code designed to perform a particular task.
// function -> executed when something invokes it.

//Function without parameters
function helloJavaScript() {
  console.log("Welcome to JavaScript!");
}
helloJavaScript();

//Function with parameters
function addNumbers(a, b) {
  var result = a + b;
  return result;
}
var returnedValue = addNumbers();
console.log("addNumbers::Returned result :- ", returnedValue); //NaN -> Not a number
returnedValue = addNumbers(10, 20);
console.log("addNumbers::Returned result :- ", returnedValue); //30

//Function expression!
//Syntax
var variable_name = function () {
  //function body
};

//Example
var subtract = function (a, b) {
  var result = a - b;
  return result;
};

var returnedValue = subtract();
console.log("subtract::Returned result :- ", returnedValue); //NaN -> Not a number

returnedValue = subtract(23, 15);
console.log("subtract::Returned result :- ", returnedValue); //8
