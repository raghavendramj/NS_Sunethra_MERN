function valueTypes() {
  var dataVariable;
  console.log("1. typeof dataVariable :- ", typeof dataVariable);

  var dataVariable = "John Doe";
  console.log("2. typeof dataVariable :- ", typeof dataVariable);

  var dataVariable = 12;
  console.log("3. typeof dataVariable :- ", typeof dataVariable);

  var dataVariable = false;
  console.log("4. typeof dataVariable :- ", typeof dataVariable);

  var dataVariable = null;
  console.log("5. typeof dataVariable NULL :- ", typeof dataVariable);

  var dataVariable = ["Bangalore", "Mysore", "Chennai"];
  console.log("6. typeof dataVariable ARRAY :- ", typeof dataVariable);

  var dataVariable = { name: "John", age: 25 };
  console.log("7. typeof dataVariable OBJECT :- ", typeof dataVariable);
}

// valueTypes();

function refenceTypesForObjects() {
  var person = { name: "John", age: 23 };
  var person2 = person;

  console.log("1. person ->  ", person);
  console.log("1. person2 ->  ", person2);

  person["email"] = "john@gmail.com";

  console.log("2. person ->  ", person);
  console.log("2. person2 ->  ", person2);

  person2["ssn"] = 123;

  console.log("3. person ->  ", person);
  console.log("3. person2 ->  ", person2);
}

// refenceTypesForObjects();

function refenceTypesForArrays() {
  var cities1 = ["Bangalore", "Chennai"];
  var cities2 = cities1;
  console.log("1. Cities :- ", cities1);
  console.log("1. Cities :- ", cities2);

  cities1.push("Kochi");
  //Pushing only for cities1,
  //but cities2 also got updated because they both are pointing to same address location

  console.log("2. Cities :- ", cities1);
  console.log("2. Cities :- ", cities2);

  cities2.push("Mumnbai");

  console.log("3. Cities :- ", cities1);
  console.log("3. Cities :- ", cities2);
}

// refenceTypesForArrays();

function letsRemoveReference() {
  var cities1 = ["Bangalore", "Chennai"];
  var cities2 = cities1;
  console.log("1. cities1 :- ", cities1);
  console.log("1. cities2 :- ", cities2);

  cities1 = ["Bangalore", "Chennai"]; //Redeclaration, this line will create a new reference for cities1
  cities1.push("Kochi");

  console.log("2. cities1 :- ", cities1);
  console.log("2. cities2 :- ", cities2);
}

letsRemoveReference();
