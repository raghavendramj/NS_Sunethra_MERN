//Zero Params
function greetPerson() {
  console.log("Welcome to the class");
}

greetPerson();
//function.apply(thisArg, [args]);
greetPerson.apply();

//One Param
function addNumbers(b) {
  let result = this.a + b;
  console.log("Result is :- ", result);
  return result;
}

addNumbers(12);
let obj = { a: 10 };
addNumbers.apply(obj, [12]);

//2 Params via this
function welcomePerson() {
  console.log("Welcome Mr." + this.firstName + " " + this.lastName);
}

welcomePerson();
let johnDoe = { firstName: "John", lastName: "Doe" };
welcomePerson.apply(johnDoe);

//1 Param via this, 2 Params via function
function addThreeNums(b, c) {
  let result = this.a + b + c;
  console.log("addThreeNums :: Result is :- ", result);
  return result;
}

addThreeNums(12, 34);
addThreeNums.apply(obj, [12, 34]);
