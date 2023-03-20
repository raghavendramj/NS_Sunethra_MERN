function objectIntro() {
  //Object creation
  let emptyObject = {};

  //property -> key:value
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  console.log("1. Person Object -> ", person);

  //Acces object -> objectName.propertyName
  console.log("person.firstName -> ", person.firstName); //Dot notation
  console.log("person.lastName -> ", person["lastName"]); //Array-like notation

  //Modification
  person.firstName = "Adam";
  person["lastName"] = "Willy";
  console.log("2. Person after modification -> ", person);

  //Adding a new property
  person.age = 25; //DOT notation
  person["email"] = "adam.willy@gmail.com"; //Array-like notation
  console.log("3. Person after adding new props -> ", person);

  //Deleting a existing property in an object
  delete person["age"]; //Array-like notation
  delete person.firstName; //DOT notation
  console.log("3. Person after deleting age -> ", person);

  //Checking if property exists or not!
  if ("lastName" in person) {
    console.log("Person contains lastName property.. ", person);
  }
}
objectIntro();
