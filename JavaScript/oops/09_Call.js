function greet() {
  "use strict";
  console.log("Welcome to class!, and this is :- ", this);
}
greet();
//func.call(thisObj, args1, args2, ...)
// func is a function that needs to be invoked with a different this object
// thisObj is an object or a value that needs to be replaced with the this keyword present inside the function
// args1, args2 are arguments that are passed to the invoking function with the changed this object.
greet.call({ name: "Raghav M J" });

function addition(a, b) {
  return a + b;
}
console.log("Sum via addition(10, 20) :- ", addition(10, 20));

//------------call(thisObj, arg1, arg2----------------
var emptyObject = {};
var addResult = addition.call(emptyObject, 10, 20);
console.log("addition.call({}, 10, 20) :- ", addResult);
console.log("addition.apply({}, 10, 20) :- ", addition.apply(emptyObject, [10, 20]));
//---------------------------------------------------

function subtraction(a) {
  var result = a - this.b;
  return result;
}
console.log("Difference via subtraction(10, 20) :- ", subtraction(10, 20));
//------------call(thisObj, arg1, arg2----------------
var myObject = { b: 5 };
var result = subtraction.call(myObject, 10);
//---------------------------------------------------
console.log("Difference via subtraction.call(myObject, 10) :- ", result);
