// Actors in this scenarion
// -> Singer
// -> Fans

// Producing Code -> Releasing the song -> Singer
// Consuming Code -> Enjoying the song -> Fans
// Promise -> Links Singer and Fans
// -> SUCCESS  :- Successful Release
// -> PENDING :- Till tomorrow 9PM
// -> FAILURE :- New postponed date for song release

// A promise is in one of these states :-
// PENDING      -> initial state, neither fulfilled nor rejected
// FULFILLED    -> Operation successfully completed
// REJECTED     -> Operation failed

// promise : SUCCESS
//     state:PENDING -> resolve("done") -> state: FULFILLED
// promise : FAILURE
//     state:PENDING -> reject("done") -> state: REJECTED

//Producing code
let singPromiseFunction = (songName) => {
  let songPromiseObject = new Promise((resolve, reject) => {
    console.log("Song Name :- ", songName);
    if (songName) {
      let msg = "Thanks guys for your patience, here's new Album song :- ";
      resolve(msg + songName);
    } else {
      reject("Couldn't record the song, Will update you all soon!");
    }
  });
  return songPromiseObject;
};

//Consuming code
// const songPromise = singPromiseFunction("Yeh dil maange more!"); //Success case example
const songPromise = singPromiseFunction(); //Failure case example
songPromise.then(
  (msg) => console.log("SUCCESS! :- ", msg), //SUCCESS
  (err) => console.log("FAILURE :- ", err) //FAILURE
);
