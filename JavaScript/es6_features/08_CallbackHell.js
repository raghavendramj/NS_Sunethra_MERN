let subtractFun = (a, b) => {
  return a - b;
};

let additionFun = (a, b) => {
  return a + b;
};

let calculate = (a, b, anyFunction) => {
  let result = anyFunction(24, 5);
  console.log("Result is :- ", result);
};

//Usecase :- Multiplication -> Addition -> Subtraction
let operate = (a, b) => {
  //calculate(a, b, subtractFun);
  calculate(a, b, function () {
    calculate(a, b, function () {
      calculate(a, b, function () {
        return a * b; //1st
      });
      return a + b; //2nd
    });
    return a - b; //3rd
  });
};

// operate(34, 15);

//Usecase :- Division -> Addition -> Multiplication -> Subtraction

//Usecase 2 :-
// 1. Visit github.com
// 2. Check user exist
// 3. list repoitories
// 4. open one repo
// 5. read the code

let callBackHellBegin = (
  passigURL,
  passingUsername,
  passingReponame,
  passingFilename
) => {
  performOperation(passingFilename, (fileName) => {
    //4. Reading the code from file
    performOperation(passingReponame, (repo) => {
      //3. List the repository
      performOperation(passingUsername, (user) => {
        //2. Check Username
        performOperation(passigURL, (url) => {
          //1. Visit URL
          setTimeout(() => {console.log("Opening url:- :- ", url);}, 2000);
        });
        setTimeout(() => {console.log("Checking the user :- ", user);}, 4000); 
      }); 
      setTimeout(() => {console.log("Listing repositories :- ", repo);}, 6000); 
    });
    setTimeout(() => {console.log("Readig Code from :- ", fileName);}, 8000);
    
  });
};

let performOperation = (param, callBack) => {
  callBack(param);
};

//url, username, reponame, filename
callBackHellBegin("bitbucket.com", "andy", "jsrepo", "callbacks.js");
