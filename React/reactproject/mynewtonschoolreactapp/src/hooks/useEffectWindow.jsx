import { useEffect, useState } from "react";

function UseEffectWindowExample() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    console.log("UseEffectWindowExample is rendered");

    const handleResize = () => {
        console.log("handleResize is invoked :- ", window.innerWidth);
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        console.log("onMount");
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container mt-5">
            WindowWidth :- {windowWidth}
        </div>
    );
}

export default UseEffectWindowExample;