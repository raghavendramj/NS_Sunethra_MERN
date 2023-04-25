import React from "react";

function Begin() {
    const divElement = React.createElement("div", {}, "This is my division");
    const ulElement = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    )

    const x = 15;
    let text = "Goodbye";
    if (x > 10) {
        text = "Welcome to JS";
    }
    return (
        // <h1>React is {10 + 20} times better with JSX</h1>
        // ulElement
        // <input type="text"></input>
        text 
    );
}

export default Begin;
const divElement = React.createElement("div", {}, "This is my division!");