function Garage(props) {
    const cars = props.cars;
    return (
        <div className="container">
            <h1>Cars Garage!</h1>
            {cars.length > 0 && <h2>You have {cars.length} cars in your garage! and they are... {cars.join(", ")}</h2>}
            {cars.length == 0 && <h2>No cars in your garage!</h2>}
        </div>
    );
}

export default Garage;