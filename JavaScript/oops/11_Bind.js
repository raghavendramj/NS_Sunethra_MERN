//func.bind(thisObj, arg1, arg2, ..., argN);
//bind function creates a copy of a function
//with a new value to the this present inside the calling function.

function addNumbers(b) {
  console.log("Value of this :- ", this);
  return this.a + b;
}

var obj = { a: 10 };

var addAlwaysten = addNumbers.bind(obj);

console.log("addAlwaysten(5) :- ", addAlwaysten(5));
console.log("addAlwaysten(15) :- ", addAlwaysten(15));
console.log("addAlwaysten(7) :- ", addAlwaysten(7));
