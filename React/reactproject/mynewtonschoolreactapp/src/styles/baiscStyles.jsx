function BasicStyles() {
    const headerStyle = {
        color: 'blue',
        backgroundColor: 'lightblueF',
        padding: '10px',
        borderRadius: '5px'
    };
    return (
        <div className="container m-3">
            <h1 style={headerStyle}>Basic Styles</h1>
        </div>

    );
}

export default BasicStyles;