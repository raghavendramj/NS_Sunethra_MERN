function subtract(x, y) {
  let result = x - y;
  console.log("Subtract Result :- ", result);
  return result;
}

console.log("typeof subtract is ", typeof subtract);

// Function.prototype type has the call() method with the following syntax:
// functionName.call(thisArg, arg1, arg2, ...);

subtract(45, 15);
subtract.call(this, 45, 15);

function greetPerson() {
  console.log("Welcome Person! ");
}

greetPerson();
greetPerson.call();

function welcome(name) {
  console.log("Welcome Mr.", name);
}

welcome("John Doe");
welcome.call(this, "John Doe");

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let widget = new Widget(100, 200, "Red");
console.log(widget);
