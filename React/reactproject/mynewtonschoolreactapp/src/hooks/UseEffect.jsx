import { useEffect, useState } from "react";

function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Invoked ${count} no of times`);
        setTimeout(() => setCount(count => count + 1), 2000);
    }, [])

    return (
        <div className="container">
            <h1>UseState Example!</h1>
            <p>Value of count is :- {count}</p>

        </div>
    );
}

export default UseEffectHook;