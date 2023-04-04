//Normal Function
function greet(name) {
  console.log("Normal Function :: Hello", name);
}
greet("Roger Federer");

//Function Expression - Anonymous Function
let greetFuncExpr = function (name) {
  console.log("Function Expression :: Hello", name);
};
greetFuncExpr("Roger Federer");

//Arrow Function
let greetArrowFunction = (name) => {
  console.log("Arrow Function :: Hello", name);
};
greetArrowFunction("Roger Federer");

//Arrow Function
let greetArrowFunctionSimplified = (name) =>
  console.log("Arrow Function :: Hello", name);
greetArrowFunctionSimplified("Roger Federer");

//Arrow Function - Add
let add = (a, b) => {
  return a + b;
}; 
console.log("Addition result is :- ", add(10, 20));

//Arrow Function - Add Simplified
let addSimp = (a, b) => a + b; 
console.log("Addition result is :- ", addSimp(10, 20));
