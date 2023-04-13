class User {
  constructor(name) {
    this.name = name;
  }
}

//Mixins - A mixin can be described as a class, which contains methods that can be used by other classes without inheriting from it.
let additionalMethods = {
  greet() {
    console.log(`Welcome Mr.${this.name}`);
  },
};

let adam = new User("Adam Stones");
console.log("1. Object :- ", adam);

// adam.greet(); //Invalid

Object.assign(User.prototype, additionalMethods);
console.log("2. Object :- ", adam);
adam.greet();
