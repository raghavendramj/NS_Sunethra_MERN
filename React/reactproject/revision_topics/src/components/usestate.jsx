//Hooks allow us to "hook" into React features such as state and lifecycle methods.
import React, { useState } from 'react'

export default function UsestateHook() {

    const [color, setColor] = useState("red");
    return (
        <div className="container">
            <hr />
            <h2>useState Hook Example...</h2>
            <h2>And State Variable is :- {color}</h2>
            <button onClick={() => setColor("blue")} className='btn btn-primary m-3'>Blue</button>
            <button onClick={() => setColor("red")} className='btn btn-danger m-3'>Red</button>
            <button onClick={() => setColor("green")} className='btn btn-success m-3'>Green</button>
            <button onClick={() => setColor("yellow")} className='btn btn-warning m-3'>Yellow</button>
            <hr />
        </div>
    )
}
