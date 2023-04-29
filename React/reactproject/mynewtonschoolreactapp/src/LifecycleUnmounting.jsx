import { Component } from "react";
import Container from "./components/Container";

class UnMountingDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewContainer: true
        }
    }

    deleteContainer = () => {
        let stateCopyObj = {
            viewContainer: false
        }
        this.setState(stateCopyObj);
    }
    render() {
        let containerComp;
        if (this.state.viewContainer) {
            containerComp = <Container />
        }
        return (
            <div className="container">
                {containerComp}
                <button type="button" className="btn btn-primary" onClick={this.deleteContainer}>Delete Container</button>
            </div>
        );
    }
}

export default UnMountingDemo;