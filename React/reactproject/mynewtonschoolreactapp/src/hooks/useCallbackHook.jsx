import { useCallback, useEffect, useState } from "react";

function UseCallBackHook() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }

    // const getItems = () => {
    //     console.log("getItems called!");
    //     return [number, number + 1, number + 2];
    // }

    const getItems = useCallback(() => {
        console.log("getItems called!");
        return [number, number + 1, number + 2];
    }, [number]);

    return (
        <div className="container m-3" style={theme}>
            <h2>Number is :- {number}</h2>
            <input type="number" value={number} onChange={event => setNumber(parseInt(event.target.value))} />
            <button onClick={() => setDark((currentValue) => {
                return !currentValue;
            })} className="btn btn-primary m-2">Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    );
}

export default UseCallBackHook;


function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
    }, [getItems]);

    return items.map(item => {
        return <div key={item}> {item}</div>;
    })
}