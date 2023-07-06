const EventEmitter = require("events");

//Callback function
let calculator = (a, b, operator) => { 
  console.log("Value of 3 params :- "+ a + operator + b);
  let sum = eval(a + operator + b);
  console.log("Result  :- ", sum);
};

const emitter = new EventEmitter();
emitter.on("add", calculator);
emitter.on("subtract", calculator);
emitter.on("divide", calculator);

emitter.emit("add", 10, 20, "+"); 
emitter.emit("subtract", 35, 20, "-");
emitter.emit("divide", 50, 6, "/");
