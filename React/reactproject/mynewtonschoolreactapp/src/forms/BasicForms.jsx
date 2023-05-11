import { useEffect, useRef, useState } from "react";

function BasicForms() {

    const [name, setName] = useState("Enter Your name");
    const nameInput = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`You have entered ${name} `);
        alert(`You have entered ${name} `);

    }

    return (
        <div className="container mt-3">
            <h1>HTML React Forms</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="Enter your name :- " >Enter your name :- </label>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary mt-4" />
            </form>
            <h2>Entered Name :- {name} </h2>


        </div>
    );
}

export default BasicForms;