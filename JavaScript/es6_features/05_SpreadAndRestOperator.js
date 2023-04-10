function spreaTest() {
  const nums1 = [1, 2, 3, 4];
  const nums2 = [8, 9, 7, 15];

  const clubbedNums = nums1.concat(nums2);
  console.log("Clubbed nums :- ", clubbedNums);

  const es6Way = [...nums1, ...nums2];
  console.log("Clubbed nums es6Way:- ", es6Way);

  const alongWithOthers = [34, ...nums1, 67, ...nums2, 19, 25];
  console.log("Clubbed nums alongWithOthers:- ", alongWithOthers);
}
// spreaTest();

function objectSpreadExample() {
  let person1 = { name: "Adam", age: 23 };
  let person2 = { name: "Mathew", age: 34 };
  let people = [person1, person2];

  let person3 = { name: "Ram", age: 26 };
  let newArray = [...people, person3];
  console.log("Object arrays spreaded :- ", newArray);
}
// objectSpreadExample();

//Rest Operator
function addNumbers(a, b, ...others) {
  console.log("\n-------------------------------")
  console.log("A :- ", a);
  console.log("B :- ", b);
  for (let eachParam of others) {
    console.log("Each param :- ", eachParam);
  } 
}
addNumbers(1, 2, 3, 4, 5, 6);
addNumbers(11, 22);
addNumbers(11, 22, 33, 56);