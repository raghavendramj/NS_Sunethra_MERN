import { Component } from "react";

class MountingPhaseDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
        console.log("1. constructor called!");
    }
    static getDerivedStateFromProps(props, state) {
        if (state.color == 'red') {
            //During 2 call in sequence 
            console.log("2. getDerivedStateFromProps called!");
            console.log("2. color before this method is :-  ", state.color);
            console.log("2. color received from props is :-  ", props.color);
            return { color: props.color };
        } else {
            console.log("5. getDerivedStateFromProps called!");
            console.log("5. color before this method is :-  ", state.color); 
            //During 5th call in sequence
            return { color: state.color };
        }
    }

    render() {
        if (this.state.color == 'maroon') {
            console.log("3. render called!"); 
        } else {
            console.log("6. render called!");
        } 

        return (
            <h1>Color of my choice is :- {this.state.color}</h1>
        );
    }
    componentDidMount() {
        console.log("4. componentDidMount called!", this.state.color);
        const newState = { color: 'yellow' };
        setTimeout(() => {
            console.log("Changing the state.color to yellow");
            this.setState(newState);
        }, 2000);
    }
}

export default MountingPhaseDemo;