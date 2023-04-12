class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    if (newName !== "") {
      this.name = newName;
    } else {
      throw "Name can't be empty!";
    }
  }
}

const iphone = new Product("Iphone 14");
console.log("1. iphone.getName() -> ", iphone.getName());
iphone.setName("Samsung S23 Ultra");
console.log("2. iphone.getName() -> ", iphone.getName());
