import React, { useState } from 'react'

export default function Home() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        const incrementCounterCB = val => val + 1;
        setCounter(incrementCounterCB);
    }
    return (

        <div className="container m-3">
            <div className="m-2"> Value : {counter}</div>
            <button className="btn btn-primary" onClick={increment}>Increment Counter</button>
        </div>
    )
}
