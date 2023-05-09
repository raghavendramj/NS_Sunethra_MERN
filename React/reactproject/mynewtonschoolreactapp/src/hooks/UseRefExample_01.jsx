import { useEffect, useRef, useState } from "react";

function UseRefExample_01() {

    const [inpValue, setInpValue] = useState("");
    const renderedCount = useRef(0);

    useEffect(() => {
        renderedCount.current = renderedCount.current + 1;
    });

    return (
        <div className="container m-3">
            <h1>UseRef Example</h1>

            <input type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)} /> 
            <h2>Component Rendered:- {renderedCount.current}</h2>
        </div>
    );
}

export default UseRefExample_01;