class Person {
  #age;
  constructor(name, age) {
    console.log("0. Constructor");
    this.name = name;
    this.#age = age;
  }

  get age() {
    console.log("1. Getter");
    return this.#age;
  }

  set age(newAge) {
    console.log("2. Setter");
    if (newAge && newAge > 0) {
      this.#age = newAge;
    }
  }
}

let john = new Person("John", 27);
console.log("1.john.age -> ", john.age);
console.log("john object -> ", john);
john.age = 35;
console.log("1.john.age -> ", john.age);
