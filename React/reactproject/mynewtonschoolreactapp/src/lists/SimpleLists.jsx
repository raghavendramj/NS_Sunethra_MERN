function Player(props) {
    return (
        <li >Player :- {props.name}</li>
    );
}

function Players(props) {
    const playersList = props.players;
    return (
        <>
            <h1>List of popular Players</h1>
            <ul>
                {playersList.map((eachPlayer) => {
                    console.log(eachPlayer);
                    return <Player key={eachPlayer.id} name={eachPlayer.name} />
                })}
            </ul>
        </>
    );
}
export default Players;