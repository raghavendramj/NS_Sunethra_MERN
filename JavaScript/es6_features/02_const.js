function constVarTest() {
  const pi = 3.142;
  console.log("1. PI :- ", pi);
  pi = 3.1421234; //TypeError: Assignment to constant variable
  console.log("2. PI :- ", pi);
}
// constVarTest();

function constArrayTest() {
  const cars = ["Saab", "Volvo", "BMW"];
  console.log("1. cars :-", cars);
  cars[0] = "Maruthi"; //Valid
  cars.push("Toyota"); //Valid
  console.log("2. cars :-", cars);
  cars = ["Saab", "Volvo", "BMW"]; //TypeError: Assignment to constant variable.
  console.log("3. cars :-", cars);
}
// constArrayTest();

function constObjectTest() {
  const car = { type: "Fiat", model: "500", color: "white" };
  console.log("1. car :-", car);
}
constArrayTest();
