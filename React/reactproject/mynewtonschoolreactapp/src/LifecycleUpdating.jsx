import { Component } from "react";

class LifecycleUpdatePhaseDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: "Sachin",
            sport: "Cricket"
        }
        console.log("1. constructor called!");
    }

    shouldComponentUpdate() {
        console.log("3. shouldComponentUpdate called!");
        return true;
    }
    changePlayer = () => {
        this.setState({
            player: "Roger Fedrer",
            sport: "Wimbeldon"
        })
    }

    render() {
        console.log("2. render called!");
        return (
            <>
                <div className="container">
                    <h1>My Favorite Player is {this.state.player}</h1>
                    <button type="button" className="btn btn-primary" onClick={this.changePlayer}>Change Player</button>
                </div>
            </>
        );
    }
}

export default LifecycleUpdatePhaseDemo;