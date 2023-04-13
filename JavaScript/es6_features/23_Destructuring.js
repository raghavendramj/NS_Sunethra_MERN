// const objects = ["table", "iphone", "apple", "Carrot"];
// const objects = ["table", "iphone", "Banana"];
const objects = ["table", "iphone"];

// const furniture = objects[0];
// const mobile = objects[1];
// const fruit = objects[2];

//Destructuring
const [furniture, mobile, fruit = "Orange"] = objects;

console.log("1. Furniture :- ", furniture);
console.log("2. Mobile :- ", mobile);
console.log("3. Fruit :- ", fruit);
