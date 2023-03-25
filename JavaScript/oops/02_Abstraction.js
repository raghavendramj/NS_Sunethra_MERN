//Constructor function
function Product(price, brand, name, qty) {
  this.price = price;
  this.brand = brand;
  this.name = name;
  this.qty = qty;

  //Private variable - Hide this from outside world
  var availableStock = 10;

  //Private function
  var productInfo = function () {
    var finalPrice = price * qty;
    var info = `${name} of brand ${brand} having quantity ${qty} is worth ${finalPrice}`;
    console.log(info);
  };
  this.getProductInfo = function () {
    productInfo();
    var stockAfterPurchase = Math.abs(this.qty - availableStock);
    console.log("Available stock is after the order is ", stockAfterPurchase);
  };
}

var samsungMobile = new Product(12000, "Samsung", "M15", 3);
samsungMobile.getProductInfo();
