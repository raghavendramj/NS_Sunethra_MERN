import { useState } from "react";

function UseStateArrayExample() {

    const [players, setPlayers] = useState([{ id: 1, name: "Virat" }, { id: 2, name: "Rahul" }, { id: 3, name: "Rishabh" }]);


    const changePlayers = () => {
        setPlayers(previousState => {
            return [...previousState, { id: 4, name: "Shami" }, { id: 5, name: "Hardhik" }];
        })
    }

    return (
        <div className="container m-3">
            <h1>Use State - Array Example!</h1>
            <ol type="i">
                {players.map(player => <h3><li key={player.id}>{player.name}</li></h3>)}
            </ol>

            <button onClick={() => changePlayers()} className="btn btn-primary mt-3">Change Players</button>

        </div>
    );
}

export default UseStateArrayExample;