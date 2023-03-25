//Constructor function
function Product(price, brand, name, qty) {
  //You must attach all the members to this to make it visible to outside world
  this.price = price;
  this.brand = brand;
  this.name = name;
  this.qty = qty;
  this.getProductInfo = function () {
    productInfo();
    var stockAfterPurchase = Math.abs(this.qty - availableStock);
    console.log("Available stock is after the order is ", stockAfterPurchase);
  };

  //Private variable - Hide this from outside world
  var availableStock = 10;

  //Private function
  var productInfo = function () {
    var finalPrice = price * qty;
    var info = `${name} of brand ${brand} having quantity ${qty} is worth ${finalPrice}`;
    console.log(info);
  };
}

var samsungMobile = new Product(12000, "Samsung", "M15", 3);
samsungMobile.getProductInfo();

console.log("samsungMobile.availableStock :- ", samsungMobile.availableStock); //undefined
samsungMobile.productInfo(); //TypeError: samsungMobile.productInfo is not a function
