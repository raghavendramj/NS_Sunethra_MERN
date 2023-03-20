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

function addRemoveElementsFromBeginning() {
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
// addRemoveElementsFromBeginning();

function deleteMethod() {
  var students = ["Vaibhav", "Nishanth", "Akasah", "Ashwin"];
  console.log("******** Before deleting elements :- ", students);
  delete students[2];
  console.log("After deleting 1 element :- ", students);
}

// deleteMethod();

function arrayMergeMethod() {
  var students_fir = ["Vaibhav", "Nishanth"];
  var students_sec = ["Akasah", "Ashwin"];
  var clubbedArr = students_fir.concat(students_sec);
  console.log("2 Clubbed arrays are :- ", clubbedArr);
  var students_thir = ["Aditya", "Rajesh"];
  console.log("3 Clubbed arrays are_v1 :- ", clubbedArr.concat(students_thir));
  console.log("3 Clubbed arrays are_v2 :- ", students_fir.concat(students_sec).concat(students_thir));
}
arrayMergeMethod();

  function arrayJoinMethod() {
    var students = ["Vaibhav", "Nishanth", "Akasah", "Ashwin"]; 
    console.log("Joined array is :- ", students.join(" <---> ")); //converts an array into a string
  }
// arrayJoinMethod();
