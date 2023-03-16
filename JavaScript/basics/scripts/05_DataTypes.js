function realizeDatatypes() {
  var nameOfThePerson = "Raghav";
  var typeofTheVar = typeof nameOfThePerson;
  console.log("typeof nameOfThePerson :- ", typeofTheVar);
  addContentInFrontOfDatatype(typeofTheVar);
}

function addContentInFrontOfDatatype(dataType) {
  document.getElementById(dataType).innerHTML +=
    ":- nameOfThePerson is of " + dataType;
}
