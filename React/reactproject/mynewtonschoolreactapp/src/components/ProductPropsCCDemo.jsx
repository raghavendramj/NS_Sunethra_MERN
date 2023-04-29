import { Component } from "react";

class PropsExampleClassComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1>Props Demo - Class Component</h1>
                <div>Received Value is :- {this.props.model} </div>
            </div>
        );
    }
}

export default PropsExampleClassComponent;