function protoBasics() {
  //Construtor;
  function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  //It will added to Object's prototype.
  Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  Person.prototype.nationality = "Indian";

  var johnDoe = new Person("John", "Doe");
  console.log("Person Object:- ", johnDoe);
  console.log("Full name :- ", johnDoe.fullName());
}

// protoBasics();

function inheritence() {

  //Prototype -> Object
  function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
  }

  function DefinePrice(price) {
    Car.call(this, "convertible", "diesel");
    console.log(`Before Car details :- `, this);
    this.price = price;
    console.log(`After Car details :- `, this);
  } 

  console.log("DefinePrice.prototype :- ", DefinePrice.prototype);
  console.log("DefinePrice.prototype.constructor :- ", DefinePrice.prototype.constructor);

  //We achieved inheritence
  DefinePrice.prototype = new Car();
  DefinePrice.prototype.constructor = DefinePrice;

  console.log("DefinePrice.prototype :- ", DefinePrice.prototype);
  console.log("DefinePrice.prototype.constructor :- ", DefinePrice.prototype.constructor); 
  
  var newCarPrice = new DefinePrice(10000); 
}
inheritence();
