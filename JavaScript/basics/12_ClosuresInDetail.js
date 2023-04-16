// let a = 12;
// function myFunction() {
//   return a * a;
// }

// let result = myFunction(7);
// console.log("result -> ", result);

// let counter = 0; //Gloabl variable
// function add() {
//   counter += 1;
// }
// add();
// add();
// add();

// counter += 1;
// counter += 1; // Anyone can modify

// //Expectation:- ONLY add() -> should modify

// console.log("Value of counter :- ", counter);

function updateCounter() {
  let counter = 0;
  //INNER FUNCTION
  function increment() {
    counter++; //counter -> outer scope variable inside the innerfunction -> increment
    console.log("Current Counter Value :- ", counter);
  }
  return increment;
}

let incCounter = updateCounter();
incCounter();
incCounter();
incCounter();
incCounter();
