function ProductPropsDemo(props) {
    return (
        <div className="container">
            <h1>Props Demo - Functional Component</h1>
            <div>{props.model}</div>
        </div>
    );
}

export default ProductPropsDemo; 