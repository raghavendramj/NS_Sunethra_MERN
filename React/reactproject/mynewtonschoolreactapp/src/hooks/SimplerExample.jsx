import { useState } from "react";

function SimplerHookExample() {
    const [color, setColor] = useState('Red'); //Red will be your initial color
    return (
        <div className="container m-3">
            <h1>My Current Role is :- </h1>
            <h2>{color}</h2>
            <button onClick={() => setColor("Yellow")} type="submit" className="btn btn-primary mt-3"  >Change Color</button>
        </div>
    );
}

export default SimplerHookExample;