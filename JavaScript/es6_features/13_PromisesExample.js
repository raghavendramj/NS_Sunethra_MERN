//Usecase 2 :-
// 1. Visit github.com
// 2. Check user exist
// 3. list repoitories
// 4. open one repo
// 5. read the code

let visitGithub = (url) => {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log("Opening url:- :- ", url);
      }, 2000)
    );
  });
};

let loginUser = (userName) => {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log("Logging in user :- :- ", userName);
      }, 4000)
    );
  });
};

let listRepo = (userRepos) => {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log("Listing repositories :- ", userRepos);
      }, 6000)
    );
  });
};

let openRepo = (repoName) => {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log("Opening repositories :- ", repoName);
      }, 8000)
    );
  });
};

let readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        console.log("Readig Code from :- ", fileName);
      }, 10000)
    );
  });
};

visitGithub("github.com")
  .then(loginUser("raghav"))
  .then(listRepo(["repo1", "repo2", "repo3"]))
  .then(openRepo("repo1"))
  .then(readFile("promise.js"))
  .catch((err) => console.log("Error occurred!"));
