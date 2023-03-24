// The global object of JavaScript in the web browser is the window object.
// It means that all variables and functions declared globally with the var keyword become
// the properties and methods of the window object.

//EXECUTE ONLY IN WEB BROWSER's console.
var salary = 100;

console.log("salary :- ", salary); //100
console.log("window.salary :- ", window.salary); //100

function addTwoNumbers(a, b) {
  return a + b;
}
console.log("Sum(10, 20 ) :-", window.addTwoNumbers(10, 20)); //30
console.log("Sum(10, 20 ) :-", addTwoNumbers(10, 20)); //30

var features = "height=600,width=800";
var url = "https://www.google.com";
var jsWindow = window.open(url, "about", features);

setTimeout(function () {
  window.open("https://www.google.com", "Google", "height=600,width=800");
}, 4000);

var myWindow = window.open(
  "https://www.google.com",
  "Google",
  "height=600,width=800"
);
setTimeout(function () {
  myWindow.resizeTo(600, 300);
}, 4000);

var secondWindow = window.open(
  "https://www.google.com",
  "Google",
  "height=600,width=800"
);

setTimeout(function () {
  secondWindow.close();
}, 2000);
