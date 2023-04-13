class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("Walking on ", this.legs, " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs); //Parent class constructor to initialize them!
  }

  fly() {
    console.log("Flying...");
  }
}

let piegon = new Bird(2);
piegon.walk();
piegon.fly();
