import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="container">
      <h2>Counter Application</h2>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Decrement Value</button>
      <div>{count}</div>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment Value</button>
    </div >

  );
}
