//Returns a promise object
async function returnNumber() {
  return 1;
}

//SAME AS ABOVE, explicit mention Returns a promise object
async function returnNumberSecond() {
  return Promise.resolve(1);
}
const retValue = returnNumber();
console.log("ASYNC Test ::  -> ", retValue);

retValue.then(
  (msg) => console.log("Success :- ", msg),
  (err) => console.log("Failure :- ", err)
);

//Await only works inside an async function
async function testAwait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Completed!"), 3000); //15 to 20
  });

  let result = await promise;
  console.log("AWAIT Test :: Success result :- ", result);
}

testAwait();
