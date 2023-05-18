import '.././App.css'
import mycustomstyle from './example.module.css'

function BasicStyles() {
    const headerStyle = {
        color: 'blue',
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px'
    };
    return (
        <div className="container m-3">
            <h1 style={headerStyle}>Basic Styles</h1>
            <p className="makeitbig">My basic styles</p>
            <p className={mycustomstyle.makeitsmall}>My Second styles</p>
        </div>

    );
}

export default BasicStyles;