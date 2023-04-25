import React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'RED',
            brand: 'Ford',
        }
    }
    updateColor = () => {
        console.log(this.state);
        let stateCopy = { ...this.state }; //1. Create a copy of state
        stateCopy.color = "Green"; //2. Do necessary modifications
        stateCopy.brand = "Benz"; //2. Do necessary modifications
        this.setState(stateCopy); //3. Updating the state using setState() method!
    }

    render() {

        return (
            <>
                <h1>This is from Class Component!</h1>
                <p>The color of the Product is {this.state.color}</p>
                <p>The brand of the Product is {this.state.brand}</p>
                <button onClick={this.updateColor}>Update Product Color</button>
            </>
        );
    }
}

export default Product;