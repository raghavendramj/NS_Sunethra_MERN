function multiply(a, b) {
  return a * b * this.c;
}
var obj = { c: 4 };
var resultCall = multiply.call(obj, 5, 6);
console.log("resultCall Result :- ", resultCall);

// SYNTAX :- func.apply(thisObj, argumentsArray);
// func is a function that needs to be invoked with a different this object
// thisObj is an object or a value that needs to be replaced with the this keyword present inside the function
// argumentsArray can be an array of arguments, array object, or the arguments keyword itself.

var resultApply = multiply.apply(obj, [5, 6]);
console.log("resultApply Result :- ", resultApply);

var result2 = multiply(5, 6);
console.log("result2 Result :- ", result2);


// (method) Function.apply(this: Function, thisArg: any, argArray?: any): any
// Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
// @param thisArg — The object to be used as the this object.
// @param argArray — A set of arguments to be passed to the function.