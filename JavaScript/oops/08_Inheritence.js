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
  function Product(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  function Mobile(brand, price, model, variant) {
    Mobile.call(this, brand, price);
    this.model = model;
    this.variant = variant;
  }

  Mobile.prototype = Product.prototype;
  Mobile.prototype = new Product();

  var apple = new Mobile("Apple", 50000, "IPhone", "14Plus");
  console.log("Apple is :- ", apple);
}
inheritence();
