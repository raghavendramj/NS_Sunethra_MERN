import { Component } from "react";

class MountingPhaseDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
        console.log("1. constructor called!");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("2. getDerivedStateFromProps called!");
        // console.log("2. color before this method is :-  ", state.color);
        // console.log("2. color received from props is :-  ", props.color);
        return { color: props.color };
    }

    render() {
        console.log("3. render called!");
        return (
            <h1>Color of my choice is :- {this.state.color}</h1>
        );
    }
    componentDidMount() {
        console.log("4. componentDidMount called!", this.state.color); 
        // const newState = { color: 'yellow' };
        // setTimeout(() => { this.setState(newState); }, 2000);
    }
}

export default MountingPhaseDemo;