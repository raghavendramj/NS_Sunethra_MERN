function indexFunctions() {
  var str = "Hi There, how are you?";

  var index = str.indexOf("are");
  console.log("Current index is :- ", index);

  var second = "blore is good, and blore is nice";
  console.log("second.lastIndexOf('blore') :- ", second.lastIndexOf("blore"));

  second = "blore is good, and Blore is nice";
  console.log("second.lastIndexOf('blore') :- ", second.lastIndexOf("blore"));
}

// indexFunctions();

function searchMethods() {
  var str = "criCKet is my favorite sport, i love playing cricket!";
  console.log("str.search('sport') :- ", str.search("sport"));

  var regExpr = /cricket/gi;
  // i -> marks case sensitivity
  // g -> represents search the entire string!
  console.log("str.search('cricket') :- ", str.search(regExpr));
}
// searchMethods();

function substringMethods() {
  var str = "my favorite country is India";
  //str.substring(start, end)
  //start -> inclusive
  //end -> exclusive
  console.log("str.substring(3, 10) :- ", str.substring(3, 10));
  console.log("str.substring(23, end) :- ", str.substring(23, str.length));
}
// substringMethods();

function repalceMethods() {
  var str = "Apples are round, and apples are juicy";
  var result = str.replace(/apples/gi, "oranges");
  // i -> marks case sensitivity
  // g -> represents search the entire string!
  console.log("str.replace('apples', 'oranges') :- ", result);
}

// repalceMethods();

function sliceMethods() {
  var str = "my favorite country is India";
  console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}

sliceMethods();
