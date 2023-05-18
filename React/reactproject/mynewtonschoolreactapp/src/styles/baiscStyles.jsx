import '.././App.css'
import mycustomstyle from 'example.css'

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
            <p className="makeitbig">My basic styles</p>
            <p className={mycustomstyle.makeitsmall}>My basic styles</p>
        </div>

    );
}

export default BasicStyles;