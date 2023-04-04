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
testLetKeyword();
