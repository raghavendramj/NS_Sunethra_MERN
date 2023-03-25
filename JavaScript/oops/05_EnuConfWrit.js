function featuresTest() {
  var person = {
    name: "John",
    email: "raghav@gmail.com",
    phone: 12345,
  };
  console.log("1. PERSON :- ", person);
  person.age = 25; //Configurable -> True
  console.log("2. PERSON :- ", person);
  delete person["email"]; //Writable -> True
  console.log("3. PERSON :- ", person);
  person.name = "Adam";
  console.log("4. PERSON :- ", person);
  console.log("Keys :- ", Object.keys(person)); //Enumerable -> True
}
// featuresTest();

function writableTest() {
  var person = {
    name: "John",
  };
  Object.defineProperty(person, "name", {
    writable: false, //BLOCK Write/Modify access
  });
  console.log("1. PERSON :- ", person);
  person.name = "Keshav";
  console.log("2. PERSON :- ", person);
  person["name"] = "Mathew";
  console.log("3. PERSON :- ", person);
}
// writableTest();

function configurableTest() {
  var person = {
    name: "John",
  };
  Object.defineProperty(person, "name", {
    configurable: false, //BLOCK delete access
  });
  console.log("1. PERSON :- ", person);
  delete person.name;
  console.log("2. PERSON :- ", person);
  delete person['name'];
  console.log("3. PERSON :- ", person);
}
// configurableTest();

function enumerableTest() {
  var person = {
    name: "John",
    age: 25,
  };
  Object.defineProperty(person, "name", {
    enumerable: false, //BLOCK object property listing access
  });
  console.log("1. PERSON :- ", person);
  console.log("2. Keys :- ", Object.keys(person));  
  console.log("person.name :- ", person.name);  
}
enumerableTest();
