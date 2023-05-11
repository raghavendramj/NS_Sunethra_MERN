import { useEffect, useRef, useState } from "react";

function BasicForms() {

    const [name, setName] = useState("Enter Your name");
    const nameInput = useRef("");
 
    return (
        <div className="container mt-3">
            <h1>HTML React Forms</h1>
            <form>
                <label htmlFor="Enter your name :- " ></label>
                <input type="text" ref={nameInput} placeholder={name} onChange={event => setName(event.target.value)} />
            </form>
            <h2>Entered Name :- {name} </h2>
        </div>
    );
}

export default BasicForms;