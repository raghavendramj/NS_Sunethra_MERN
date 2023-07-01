import React, { useState } from 'react'

export default function MultipleFormElements() {
    const [inputs, setInputs] = useState({});

    const handleModifications = (event) => {
        //Case TextBox
        if (event.target.type === 'text') {
            setInputs({ ...inputs, username: event.target.value })
            console.log("text value :- ", event.target.value);
        }
        //Case radio
        if (event.target.type === 'radio') {
            console.log("martialStatus");
            setInputs({ ...inputs, [event.target.name]: event.target.value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Entered Values :- ", inputs);
    }

    return (
        <div className='container m-3'>
            <h1>Multiple Form Elements!</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username" className='mb-3 fs-4'>Enter Username :- </label>
                    <input type="text" className='form-control'
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleModifications}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="username" className='mb-3 fs-4'>Martial Status :- </label>
                    <input type="radio"
                        className='m-2'
                        name="martialStatus"
                        value="married"
                        checked={inputs.checked}
                        onChange={handleModifications}
                    /> Married
                    <input type="radio"
                        className='m-2'
                        name="martialStatus"
                        value="unmarrried"
                        checked={inputs.checked}
                        onChange={handleModifications}
                    /> Unmarried
                </div>

                <input type="submit" value="Submit Form" className='btn btn-primary'/>
            </form>

        </div>

    )
}
