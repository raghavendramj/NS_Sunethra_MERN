function arrayExample() {
  var arr1 = ["Siman", "Virat", "Nahar", "Praneeth", "Keshav"];
  var arr2 = [1, 2, 3, 4, 5, 6];
  var arr3 = [true, false, true];
  var arr4 = ["Bangalore", 560001, true];

  //Iterate the array
  for (var eachName of arr1) {
    console.log("eachName -> ", eachName);
  }

  //Accessibility
  console.log("First Element :- ", arr1[0]);
  console.log("Last Element :- ", arr1[arr1.length - 1]);
}

arrayExample();

function addRemoveElementsFromEnd() {
  var people = ["Siman", "Virat"];
  console.log("************* Before Push :- ", people);
  people.push("Rishabh");
  people.push("Praneeth");
  console.log("************* After Push :- ", people);
}

addRemoveElementsFromEnd();

