function printName(lastName) {
  console.log("Full name :- ", this.firstName, " " + lastName);
}

var myObject = { firstName: "John" };
//------------func.call(thisObj, arg1, arg2)----------------
printName.call(myObject, "Doe");

//------------func.apply(thisObj, [arg1, arg2])--------------
var argsArray = ["Doe"];
printName.apply(myObject, argsArray);

//------------func.bind(thisObj)(arg1, arg2)----------------
var objBoundedVar = printName.bind(myObject);
objBoundedVar("Doe");
//-----------------------------------------------------------


secondVar = printName.bind({ firstName: "Adam" });
thirdVar = printName.bind({ firstName: "Adam" });