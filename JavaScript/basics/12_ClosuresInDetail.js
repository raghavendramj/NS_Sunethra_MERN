let a = 12;
function myFunction() {
  return a * a;
}

let result = myFunction(7);
console.log("result -> ", result);

let counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();

console.log("Value of counter :- ", counter);
