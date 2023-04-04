function testVarKeyword() {
  var number = 10;
  console.log("1. Number :- ", number);
  {
    var number = 20;
    console.log("2. Number :- ", number);
  }
  console.log("3. Number :- ", number);
}
// testVarKeyword();

function testLetKeyword() {
  let number = 10;
  console.log("1. Number :- ", number);
  {
    let number = 20;
    console.log("2. Number :- ", number);
  }
  console.log("3. Number :- ", number);
}
// testLetKeyword();

function hoistingVarTest() {
  console.log("1. Hoisting :: Number :- ", number);
  var number;
  console.log("2. Hoisting :: Number :- ", number);
  number = 10;
  console.log("3. Hoisting :: Number :- ", number);
}

// hoistingVarTest();

function addNumbers() {
  debugger;
  console.log("A:-", a);
  console.log("Addition funtion");
  var b;
  console.log("B:-", b);
  var a;
  console.log("C:-", c);
  a = 10;
  b = 20;
  var c = a + b;
  console.log("Finally C :-", c);
}
// addNumbers();

function letHoistTest() {
  console.log("1. My number :- ", myNumber); //Cannot access 'myNumber' before initialization
  let myNumber; 
  console.log("2. My number :- ", myNumber); 
  myNumber = 23;
  console.log("3. My number :- ", myNumber);
}

letHoistTest();
