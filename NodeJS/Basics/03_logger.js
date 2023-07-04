function log(message) {
  console.log("---------------> Inside LOG function <--------------- ");
  console.log("Message is :- ", message);
}

var piVariable = 3.142;

module.exports.printMessage = log;
module.exports.piValue = piVariable;
