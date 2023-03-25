//Constructor function
function Product(price, brand, model) {
  this.price = price;
  this.brand = brand;
  this.model = model;

  //Private variable
  var stocks = 10; 

  Object.defineProperty(this, "stks_avail", {
    //Getter for stocks
    get: function () {
      return stocks;
    },
    set: function (value) {
      //Check 1 - Value
      if (value === "" || value === "undefined" || value === undefined) {
        throw Error("Invalid stock information");
      }

      //Check 2 - Type
      if (typeof value !== "number") {
        throw Error("Invalid stock information - Its not a number");
      }

      console.log("Adding new ", value, "stocks !");
      stocks += value;
    },
  });
}

var apple = new Product(85000, "Apple", "IPhone14");
console.log("apple ->", apple);
console.log("1. apple.stks_avail ->", apple.stks_avail);
apple.stks_avail = 12;
console.log("2. apple.stks_avail ->", apple.stks_avail);
