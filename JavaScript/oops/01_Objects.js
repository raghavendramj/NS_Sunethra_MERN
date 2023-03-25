//Object creation - using constructor function!
function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
var person2 = new Person("Supreeth Raj", 22, "supreeth.raj@gmail.com");
function printObjectDetails(obj) {
  console.log("--------------> Details about object are <--------------");
  for (var eachProperty in obj) {
    console.log("obj[", eachProperty, "] :- ", obj[eachProperty]);
  }
}

var person1 = new Person("John Doe", 25, "john.doe@gmail.com");
function objectOperations() {
  //Add a new property to the object
  person1.phone = 123456; //DOT notation
  person1["city"] = "Bangalore"; //Array-like notation
  printObjectDetails(person1);

  console.log("Keys in object are :- ", Object.keys(person1));

  //Check for existence
  if ("phone" in person1)
    console.log("Does object contain property phone? :- ", "phone" in person1);

  //Removing properties from an object
  delete person1["email"];
  delete person1.age;

  printObjectDetails(person1);
}
objectOperations();
