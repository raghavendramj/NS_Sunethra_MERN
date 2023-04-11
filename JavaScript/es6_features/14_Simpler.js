//Usecase 2 :-
// 1. Visit github.com
// 2. Check user exist
// 3. list repoitories
// 4. open one repo
// 5. read the code

let visitGithub = (url) => {
  return new Promise((resolve, reject) => {
    resolve(console.log("1. Opening url:- :- ", url));
  });
};

let loginUser = (userName) => {
  return new Promise((resolve, reject) => {
    resolve(console.log("2. Logging in user :- :- ", userName));
  });
};

let listRepo = (userRepos) => {
  return new Promise((resolve, reject) => {
    resolve(console.log("3. Listing repositories :- ", userRepos));
  });
};

let openRepo = (repoName) => {
  return new Promise((resolve, reject) => {
    resolve(console.log("4. Opening repositories :- ", repoName));
  });
};

let readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    resolve(console.log("5. Readig Code from :- ", fileName));
  });
};

visitGithub("github.com")
  .then(loginUser("raghav"))
  .then(listRepo(["repo1", "repo2", "repo3"]))
  .then(openRepo("repo1"))
  .then(readFile("promise.js"))
  .catch((err) => console.log("Error occurred!"));
