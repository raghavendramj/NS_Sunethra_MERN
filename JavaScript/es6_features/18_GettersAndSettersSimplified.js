class Product {
  constructor(nameOfTheProduct) {
    console.log("1. Invoking Constructor");
    this.prodName = nameOfTheProduct;
  }

  get name() {
    console.log("2. Invoking Getter");
    return this.prodName;
  }

  set name(newName) {
    console.log("2. Invoking Setter");
    newName = newName.trim();
    if (newName !== "") {
      this.prodName = newName;
    } else {
      throw "Name can't be empty!";
    }
  }
}

const product = new Product("Iphone 14");
console.log("1. product.name -> ", product.name);
product.name = "Samsung S22 Ultra";
console.log("2. product.name -> ", product.name);

//------------------------------------------------------
class Person {
  constructor(cityName) {
    this.personCity = cityName;
  }

  get city() {
    return this.personCity;
  }

  set city(newCityName) {
    if (newCityName !== "") {
      this.prodName = newName;
    }
  }
}
const john = new Person("Bangalore");
console.log("1. john.city -> ", john.city);
john.city = "Chennai";
console.log("2. product.name -> ", product.name);
//------------------------------------------------------
