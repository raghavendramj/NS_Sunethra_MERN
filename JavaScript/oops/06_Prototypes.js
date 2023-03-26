function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// function Object(){
//     this.nationality = "Indian"
// }

//It will added to Object's prototype.
Person.prototype.nationality = "Indian"; //It will added to Object's prototype.
Person.prototype.greet = function () {
  var msg = "Hi, I'm " + this.firstName + " " + this.lastName + "!";
  console.log(msg);
  return msg;
};

//Returns only instance members.
var person = new Person("John", "Doe");
console.log("person -> ", person); //Person { firstName: 'John', lastName: 'Doe' }
console.log("person.nationality -> ", person.nationality); //Indian
person.greet();

function printObjectDetails(obj) {
  console.log("--------------> Details about object are <--------------");
  //returns all members (instance + prototype)
  for (var eachProperty in obj) {
    console.log("obj[", eachProperty, "] :- ", obj[eachProperty]);
    console.log(
      "obj.hasOwnProperty(",
      eachProperty,
      ") :- ",
      obj.hasOwnProperty(eachProperty)
    );
  }
}

printObjectDetails(person);
