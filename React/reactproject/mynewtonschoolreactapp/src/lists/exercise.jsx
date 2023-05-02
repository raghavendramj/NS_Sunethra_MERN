function Crickerters(props) {
    const allCricketers = props.players;
    const specializationFilter = props.filter;
    const filteredPlayers = allCricketers.filter(each => each.specialization === specializationFilter);
    return (
        <div className="container">
            <h1>List of all Crickerters</h1>
            <ul>
                {allCricketers.map(
                    eachCricketer => <li key={eachCricketer.id}>{eachCricketer.name} - {eachCricketer.specialization}</li>
                )}
            </ul>
            <FilteredPlayer filteredPlayers={filteredPlayers} />
        </div>
    );
}

export default Crickerters;


function FilteredPlayer(props) {
    return (
        <div className="container">
            <h1>Filtered Crickerters</h1>
            <ul>
                {props.filteredPlayers.map(
                    eachCricketer => <li key={eachCricketer.id}>{eachCricketer.name} - {eachCricketer.specialization}</li>
                )}
            </ul>
        </div>
    );
}