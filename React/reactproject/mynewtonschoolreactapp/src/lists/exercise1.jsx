function Crickerters(props) {
    const allCricketers = props.players;
    const specializationFilter = props.playerType;
    const filteredPlayers = allCricketers.filter(each => each.specialization === specializationFilter);
    return (
        <div className="container">
            <h1>List of all Cricketers</h1>
            <ol>
                {allCricketers.map(
                    eachCricketer => <li key={eachCricketer.id}>{eachCricketer.name} - {eachCricketer.specialization}</li>
                )}
            </ol>
            <FilteredPlayers filteredPlayers={filteredPlayers} />
        </div>
    );
}

export default Crickerters;


function FilteredPlayers(props) {
    const appliedFilter = props.filteredPlayers[0].specialization;
    return (
        <div className="container">
            <h1>{appliedFilter} Cricketers</h1>
            <ul>
                {props.filteredPlayers.map(
                    eachCricketer => <li key={eachCricketer.id}>{eachCricketer.name} - {eachCricketer.specialization}</li>
                )}
            </ul>
        </div>
    );
}