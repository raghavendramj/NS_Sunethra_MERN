import { useState } from "react";

function FormWithMultipleFields() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const inputName = event.target.name; //input element's key
        const inputValue = event.target.value; //input elements's entered value 
        console.log("inputName :- ", inputName);
        console.log("inputValue :- ", inputValue);
        setInputs(values => ({ ...values, [inputName]: inputValue }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Entered Values :- ", inputs);
    }


    return (

        <div className="container m-3">
            <h1>Form with multiple Fields</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="username">Username :- </label></td>
                        <td><input type="text" name="username" value={inputs.username || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="age">Age :- </label></td>
                        <td><input type="text" name="age" value={inputs.age || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <input type="submit" className="mt-3 btn btn-primary" value="Submit Form" />
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default FormWithMultipleFields;