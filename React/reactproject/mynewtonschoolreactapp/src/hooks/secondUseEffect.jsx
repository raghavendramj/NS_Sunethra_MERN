import { useEffect, useState } from "react";

function SecondUseEffectExample() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(
        () => {
            console.log(`useEffect is called! - ${count}`);
            setCalculation(() => count * 2)
        }, [count]);

    return (
        <div className="container m-3">
            <h1>useEffect and useState Example!</h1>
            <p>Count :- {count}</p>
            <button onClick={() => setCount(count => count + 1)} className="btn btn-primary mt-3 mb-3" >Increment Counter</button>
            <p>Calculation :- {calculation}</p>
        </div>
    );
}

export default SecondUseEffectExample;