import { useState } from "react";

function FormWithMultipleFields() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const inputName = event.target.name; //input element's key
        //inputs value
        const inputValue = event.target.type === 'radio' ? event.target.checked : event.target.value;
        console.log("handleChange :: Entered Values :- ", inputs);
        setInputs(values => ({ ...values, [inputName]: inputValue }));
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
                        <td><label htmlFor="firstName">First Name :- </label></td>
                        <td><input type="text" name="firstName" value={inputs.firstName || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="lastName">Last Name :- </label></td>
                        <td><input type="text" name="lastName" value={inputs.lastName || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email :- </label></td>
                        <td><input type="email" name="email" value={inputs.email || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="age">Age :- </label></td>
                        <td><input type="text" name="age" value={inputs.age || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phoneNumber">Phone Number :- </label></td>
                        <td><input type="number" name="phoneNumber" value={inputs.phoneNumber || ""} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phoneNumber">Married Status:- </label></td>
                        <td><input type="radio" name="married" value="married" checked={inputs.checked} onChange={handleChange} /> Married</td>
                        <td><input type="radio" name="married" value="unmarried" checked={inputs.checked} /> Un Married</td>
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

//FirstName, lastName, email, phoneNo, Married/Unmarried -> Submit