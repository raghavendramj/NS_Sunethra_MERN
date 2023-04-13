class Product {
  #price;
  #model;

  constructor(price, model, brand) {
    this.#price = price;
    this.#model = model;
    this.brand = brand;
  }

  //showDetails -> default parameter/optional parameter
  getDetails(showDetails = false) {
    let completeProduct =  `Product ${this.#model} of brand ${this.brand} is of price :- ${this.#price}`;
    return showDetails ? completeProduct : this;
  }
}

let iPhone = new Product(2500, "IPhone 14", "Apple");
let details = iPhone.getDetails();
console.log("1. details -> ", details);
details = iPhone.getDetails(true);
console.log("2. details -> ", details);
