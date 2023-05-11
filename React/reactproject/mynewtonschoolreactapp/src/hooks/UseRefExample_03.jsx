import { useEffect, useRef, useState } from "react";

function UseRefExample_03() {

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
        console.log("previousValue.current ->", previousInputValue.current);
    }, [inputValue]);

    return (
        <div className="container m-3">
            <h1>UseRef Example -03</h1>

            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
     
            <h1>Current Value  is :- {inputValue}</h1>
            <h1>Previous Value  is :- {previousInputValue}</h1>
        </div>
    );
}

export default UseRefExample_03;