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

// arrayExample();

function addRemoveElementsFromEnd() {
  var people = ["Siman", "Virat"];
  console.log("******** Before Push :- ", people);
  people.push("Rishabh"); //Add Element at the end
  people.push("Praneeth"); //Add Element at the end
  console.log("******** After Push :- ", people); 
  people.pop();
  people.pop();
  console.log("******** After Poping 2 elements :- ", people);
}

// addRemoveElementsFromEnd();

function addRemoveElementsFromBeginning(){
  var people = ["Rishabh", "Praneeth"];
  console.log("******** Before Unshifting/Adding :- ", people);
  people.unshift("John"); //Add Element at the front
  people.unshift("Adam"); //Add Element at the front
  people.unshift("Mathew"); //Add Element at the front
  console.log("******** Before Shifting/Removing :- ", people); 

  people.shift(); //Removes element from the front
  people.shift(); //Removes element from the front
  console.log("******** Aftr Shifting/Removing (2) :- ", people); 
}
addRemoveElementsFromBeginning();

//Added now!