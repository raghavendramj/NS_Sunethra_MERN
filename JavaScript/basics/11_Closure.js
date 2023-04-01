//Lexical Scoping
var nameOfPerson = "Raghav";
function greeting() {
  var message = "Hello";
  console.log("Message is :- ", message + " " + nameOfPerson);

  function sayHi() {
    console.log("sayHi -> ", message); 
    //message -> outer scope variable inside the innerfunction -> sayHi
  }
  return sayHi;
}
var msg = greeting(); //Function greeting ends.....
msg();
