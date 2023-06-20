import { createStore } from "redux";
import { mytodoreducer } from "../reducers/todoreducer";

export const mytodostore = createStore(mytodoreducer);
 
mytodostore.subscribe(() => {
    console.log("You current store is :- ", mytodostore.getState());
});

mytodostore.dispatch({
    type: 'add_todo',
    id: 0,
    text: 'buy milk'
});

// mytodostore.dispatch({
//     type: 'add_todo',
//     id: 1,
//     text: 'buy pencils'
// });