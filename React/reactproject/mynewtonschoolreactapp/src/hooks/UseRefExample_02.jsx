import { useRef, useState } from "react";

function UseRefExample_02() {
    const inputElement = useRef();
    const [val, setVal] = useState("");

    const focusInput = () => {
        inputElement.current.focus();
    }

    const changedValue = () => {
        console.log("inputElement.current.value -> ", inputElement.current.value);
        setVal(inputElement.current.value);
    }

    return (
        <div className="container m-3">
            <h1>UseRef Example -02</h1>
            <input type="text" ref={inputElement} onChange={changedValue} />
            <br />
            <div>Typed Content is :- {val}</div>
            <button onClick={focusInput} className="m-3 btn btn-primary">Focus Input</button>
        </div>
    );
}

export default UseRefExample_02;