import { createStore } from "redux";

//2. Reducer is invoked for dispatched action, and modifies the state accordingly
const reducer = (state = 0, action) => {

    if (action.type === 'increment') {
        if (action.payload) {
            return state + action.payload;
        }
        return state + 1;
    }

    if (action.type === 'decrement') {
        if (action.payload) {
            return state - action.payload;
        }
        return state - 1;
    }

    console.log("Reducer invoked! :- ", state);
    return state;
} 
export const store = createStore(reducer);

//3. This will tell us the current state value.
store.subscribe(() => {
    console.log("Current State :- ", store.getState());
})

//Manual way of invoking dispatch action
//1. Action is dispatched
store.dispatch({
    type: 'increment'
});

store.dispatch({
    type: 'increment'
});

store.dispatch({
    type: 'decrement'
});

store.dispatch({
    type: 'increment',
    payload: 5
});

store.dispatch({
    type: 'increment',
    payload: 14
});  