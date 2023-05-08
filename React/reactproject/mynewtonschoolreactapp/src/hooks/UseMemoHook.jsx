import { useMemo, useState } from "react";

function UseMemoHook() {
    const [number, setNumber] = useState(0);
    // const doubleNumber = slowFunction(number);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);


    const [dark, setDark] = useState(false);
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }

    return (
        <div className="container m-3">
            <h2>Number is :- {number}</h2>
            <input type="number" value={number} onChange={event => setNumber(parseInt(event.target.value))} />
            <button onClick={() => setDark(curDark => !curDark)} className="btn btn-primary m-2">Change Theme</button>
            <h2 style={themeStyles}>Double Number is :- {doubleNumber}</h2>
        </div>
    );
}
export default UseMemoHook;

function slowFunction(number) {
    for (let i = 0; i <= 900000000; i++) { }
    return number * 2;
}