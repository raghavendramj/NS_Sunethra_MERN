let person = {
  name: "John Doe",
  getName: function () {
    console.log("Name :- ", this.name);
  },
};

let initP = person.getName;
initP(); // It will loose the context of person

let simplePerson = person.getName.bind(person);
simplePerson();

let myPerson = { name: "Adam Garry" };
simplePerson = person.getName.bind(myPerson);
simplePerson();

let add = function (b) {
  const result = this.a + b;
  console.log("Result :- ", result);
  return result;
};

let add10 = add.bind({ a: 10 });
add10(4);
add10(6);
add10(14);