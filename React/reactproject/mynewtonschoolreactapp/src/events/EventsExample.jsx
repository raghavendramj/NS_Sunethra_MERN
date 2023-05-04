function EventsExample(props) {

    const shoot = () => {
        console.log("Great Shot!");
    }

    const paramsExample = (a, b) => {
        console.log("A :- ", a);
        console.log("B :- ", b);
        console.log("Great Shot!");
    }

    return (
        <div className="container">
            <h1>Events Example!</h1>
            <button className="btn btn-primary" onClick={shoot}>Take a Shot!</button>
            <div>Props Passed :- {props.param}</div>
            <br />
            <br />
            <button className="btn btn-primary" onClick={(event) => paramsExample(props.param, event)}>Params Example!</button>
        </div>
    );
}

export default EventsExample;