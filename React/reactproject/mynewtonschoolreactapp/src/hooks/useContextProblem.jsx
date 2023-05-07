import { useState } from "react";

function UseContextHook() {

    const [player, setPlayer] = useState("Sachin Tendulkar")
    return (
        <div className="container m-3">
            <div>UseContextHook :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{player}</b></p>
            <button onClick={() => setPlayer("Virat Kohli")} className="btn btn-primary mt-3 mb-3" >Change Player</button>
            <ExampleComp1 player={player} />
        </div>
    );
}

export default UseContextHook;

function ExampleComp1({ player }) {
    return (
        <div className="container-fluid">
            <div>ExampleComp1 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{player}</b></p>
            <ExampleComp2 player={player} />
        </div>
    );
}

function ExampleComp2({ player }) {
    return (
        <div className="container-fluid">
            <div>ExampleComp2 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{player}</b></p>
            <ExampleComp3 player={player} />
        </div>
    );
}

function ExampleComp3({ player }) {
    return (
        <div className="container-fluid">
            <div>ExampleComp3 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{player}</b></p>
            <ExampleComp4 player={player} />
        </div>
    );
}

function ExampleComp4({ player }) {
    return (
        <div className="container-fluid">
            <div>ExampleComp4 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{player}</b></p>
        </div>
    );
}