// function Person(name, city) {
//   this.name = name;
//   this.city = city;
// }

class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}

let john = new Person("John Doe", "Bangalore");
console.log("Person :: John -> ", john);
