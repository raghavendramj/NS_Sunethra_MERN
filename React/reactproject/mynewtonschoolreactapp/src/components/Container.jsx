import { Component } from "react";

class Container extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        console.log("The component is about to get unmounted!");
    }

    render() {
        return (
            <h1>I am Container Class!</h1>
        );
    }
}

export default Container;