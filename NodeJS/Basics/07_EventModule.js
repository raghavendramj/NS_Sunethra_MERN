const EventEmitter = require("events");

//Events Flow!
//1. Define an Event
//2. Callback function -> What will happen on that event
//3. Trigger that event

//2. Callback function -> What will happen on that event
let invokeLogger = (a, b) => {
  console.log("Log event is triggered!");
  console.log("Value of A :- ", a);
  console.log("Value of B :- ", b);
  let sum = a + b;
  console.log("Result  :- ", sum);
};

//1. Define/Linking an Event
const emitter = new EventEmitter();
emitter.on("logMessage", invokeLogger);

//3. Triggering the event.
emitter.emit("logMessage", 10, 20);
emitter.emit("logMessage", "Arg1", "Arg2");

//Callback function
let calculator = (a, b, operator) => {
  console.log("Log event is calculator!");
  console.log("Value of A :- ", a);
  console.log("Value of B :- ", b);
  console.log("Value of operator :- ", operator);
  let sum = eval(a + operator + b);
  console.log("Result  :- ", sum);
};
