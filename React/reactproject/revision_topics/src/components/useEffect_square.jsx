import React, { useEffect, useRef, useState } from 'react'

export default function UseEffectHookSquare() {

    const [number, setNumber] = useState(3);
    const [square, setSquare] = useState(1);
    const referredNum = useRef();

    useEffect(() => {
        console.log(`useEffect is called ${number}`);
        setSquare(number * number);
    }, [number]);

    return (
        <div className='container m-3'>
            <h2>Use Effect Hook Demo</h2>
            <h3>useState - Current Number :- {number}</h3>
            <h3>useEffect - Squared Number :- {square}</h3>
            <br />
            <button onClick={() => setNumber(5)} className='btn btn-primary m-3'>Change to 5</button>
            <button onClick={() => setNumber(10)} className='btn btn-primary m-3'>Change to 10</button>
            <button onClick={() => setNumber(15)} className='btn btn-primary m-3'>Change to 15</button>

            <label htmlFor="number">Enter a Number :- </label>
            <input type="text" name="number" ref={referredNum} className='m-2' />
            <button onClick={() => setNumber(referredNum.current.value)} className='btn btn-primary m-3'>Change Number</button>

        </div>
    )
}
