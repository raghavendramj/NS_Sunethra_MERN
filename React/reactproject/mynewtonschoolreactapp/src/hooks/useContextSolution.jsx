import { createContext, useContext, useState } from "react";

const userContext = createContext();

function UseContextHookSolution() {
    const [player, setPlayer] = useState("Sachin Tendulkar")
    return (
        <userContext.Provider value={player}>
            <div className="container m-3">
                <div><b>UseContextHookSolution</b> :: useContext Hook Example!</div>
                <p>Hello Mr. <b>{player}</b></p>
                <button onClick={() => setPlayer("Virat Kohli")} className="btn btn-primary mt-3 mb-3" >Change Player</button>
                <ExampleComp1 />
            </div>
        </userContext.Provider>
    );
}

export default UseContextHookSolution;

function ExampleComp1() {
    const onePlayer = useContext(userContext);
    return (
        <div className="container-fluid">
            <div>ExampleComp1 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{onePlayer}</b></p>
            <ExampleComp2 />
        </div>
    );
}

function ExampleComp2() {
    const twoPlayer = useContext(userContext);
    return (
        <div className="container-fluid">
            <div>ExampleComp2 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{twoPlayer}</b></p>
            <ExampleComp3 />
        </div>
    );
}

function ExampleComp3() {
    const threePlayer = useContext(userContext);
    return (
        <div className="container-fluid">
            <div>ExampleComp3 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{threePlayer}</b></p>
            <ExampleComp4 />
        </div>
    );
}

function ExampleComp4() {
    const fourPlayer = useContext(userContext);
    return (
        <div className="container-fluid">
            <div>ExampleComp4 :: useContext Hook Example!</div>
            <p>Hello Mr. <b>{fourPlayer}</b></p>
        </div>
    );
}