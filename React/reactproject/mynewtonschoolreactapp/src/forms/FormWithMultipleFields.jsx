import { useState } from "react";

function FormWithMultipleFields() {

    const [inputs, setInputs] = useState({});

    const hobbies = [
        { id: 1, value: "singing" },
        { id: 2, value: "dancing" },
        { id: 3, value: "trekking" },
    ];

    const handleChange = (event) => {
        const inputName = event.target.name; //input element's key 
        if (event.target.type === 'checkbox') {
            setInputs(values => ({ ...values, [inputName]: event.target.checked }));
            return;
        }
        //Other input elements -> text, number, radio
        const inputValue = event.target.value;
        console.log("handleChange :: Entered Values :- ", inputs);
        setInputs(values => ({ ...values, [inputName]: inputValue }));
    }

    //Corner Case -> Interview Case!
    const handleCheckBoxes = (event) => {
        if (event.target.type !== 'checkbox') {
            return;
        }
        let value = event.target.value;
        let nameOfTheInput = event.target.name;
        let checkedItems = inputs[nameOfTheInput];

        const isEmptyArray = checkedItems === undefined || checkedItems.length === 0;

        //Uncheck Case
        if (!isEmptyArray && event.target.checked === false) {
            let elementIndex = checkedItems.indexOf(value);
            checkedItems.splice(elementIndex, 1);
            return;
        }

        //Check Case
        if (isEmptyArray) {
            checkedItems = new Array();
        }
        checkedItems.push(value);
        checkedItems = Array.from(new Set(checkedItems));
        setInputs(values => ({ ...values, [nameOfTheInput]: [...checkedItems] }));  
        console.log("inputs :- ", inputs);
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
                        <td><input type="radio" name="martialStatus" value="married" checked={inputs.checked} onChange={handleChange} /> Married</td>
                        <td><input type="radio" name="martialStatus" value="unmarried" checked={inputs.checked} onChange={handleChange} /> Unmarried</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="city">City :- </label></td>
                        <td>
                            <select name="city" id="city" onChange={handleChange}>
                                <option value=""></option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phoneNumber">Hobbies:- </label></td>
                        {hobbies.map(eachHobbie => {
                            return <td><input type="checkbox" key={eachHobbie.id} name="hobbies" value={eachHobbie.value} onChange={handleCheckBoxes} /> {eachHobbie.value}</td>
                        })}
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="terms" value="terms" checked={inputs.checked} onChange={handleChange} /> I accept all terms and conditions!</td>
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
//Select City -> Bangalore, Chennai Mumbail, Delhi, Ahemedabad
//CheckBox -> Hobbies -> Playing Cricket, ...