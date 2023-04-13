function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log("Walking on ", this.legs, " legs");
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  console.log("Flying...");
};

let piegon = new Bird(2);
piegon.walk();
piegon.fly();
