function testImmutability() {
  const obj = { a: 1, b: 2 };
  console.log("1. Obj :- ", obj);
  obj.b = 3; // still the same object outside, but the contents have changed
  console.log("2. Obj :- ", obj);

  const arr = ["a", "b"];
  console.log("1. arr :- ", arr);
  arr.push("c");
  console.log("2. arr :- ", arr);
}

// testImmutability();

//This is called mutating the object or array.
//It's the same object or array reference in memory,
// but now the contents inside the object have changed.

//In order to update values immutably,
//your code must make copies of existing objects/arrays,
//and then modify the copies.

function achieveImmutability() {
  const obj = { a: 1, b: 2 };
  const arr = ["a", "b"];
}

function defaultValueTest(a, b = 12) {
  console.log("a :- ", a);
  console.log("b :- ", b);
  let sum = a + b;
  console.log("Result :- ", sum);
  return sum;
}

defaultValueTest(13);
defaultValueTest(13, 17);

//ACTION :- Simple Action Object	->
const addToDoAction = {
  type: "todos/add",
  payload: "Need to purchase pen and pencils",
};
//Action Creators	->
const addTodo = (text) => {
  return {
    type: "todos/add",
    payload: text,
  };
};

const initialState = { value: 0 };

//REDUCDER :-
function counterReducer(action, state = initialState) {
  //Check for type of action..a
  if (action.type === "counter/increment") {
    console.log("initialState State :- ", initialState);
    return {
      ...state,
      value: state.value + 1,
    };
  }
  return state;
}

const incrementAction = { type: "counter/increment" };

let newState = { value: 0 };
for (let i = 0; i < 10; i++) {
  newState = counterReducer(incrementAction, newState);
  console.log("Retured State :- ", newState);
}


