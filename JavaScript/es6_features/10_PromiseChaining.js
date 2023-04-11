const addPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Unable to perform Addition");
    } else {
      let result = arr[0] + arr[1];
      console.log("Sum is :- ", result);
      resolve(arr);
    }
  });
};

const subPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Unable to perform Addition");
    } else {
      let a = arr[0];
      let b = arr[1];
      let result = a > b ? a - b : b - a;
      console.log("Difference is :- ", result);
      resolve(arr);
    }
  });
};

const multiplyPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Unable to perform Addition");
    } else {
      let result = arr[0] * arr[1];
      console.log("Product is :- ", result);
      resolve(arr);
    }
  });
};

let arr = [23, 15];

//Single line Promise chaining
console.log("\n ----------- Single Line Promise Code ---------!");
addPromise(arr)
  .then(subPromise)
  .then(multiplyPromise)
  .catch((err) => console.log("Error occured!", err));

setTimeout(() => {
  console.log("\n ----------- Elaborative Promise Code ---------!");
  // Elaborative promise chaining
  let firstPromise = addPromise(arr);
  //Addition
  let secondPromise = firstPromise.then(
    (arr) => {
      console.log("Addition Response :- ", arr);
      return subPromise(arr);
    },
    (err) => {
      console.log("Failed to execute! ", err);
    }
  );

  //Subtraction
  let thirdPromise = secondPromise.then(
    (arr) => {
      console.log("Subtraction Response :- ", arr);
      return multiplyPromise(arr);
    },
    (err) => {
      console.log("Failed to execute! ", err);
    }
  );

  //Multiplication
  thirdPromise.then(
    (arr) => {
      console.log("Last Success Response :- ", arr);
    },
    (err) => {
      console.log("Failed to execute! ", err);
    }
  );
}, 3000);
