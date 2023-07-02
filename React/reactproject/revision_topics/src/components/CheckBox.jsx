import React, { useState } from 'react'

export default function CheckBox() {
    const [inputs, setInputs] = useState({});

    const hobbies = [
        { id: 1, value: "Singing" },
        { id: 2, value: "Dancing" },
        { id: 3, value: "Trekking" },
    ];
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Entered Values :- ", inputs);
    }




    const handleModifications = (event) => {
        //Case TextBox
        if (event.target.type === 'checkbox') {



            let inpName = event.target.name; //Key
            let value = event.target.value; //Value
            let checkedItems = inputs[inpName]; //Already checked inputs

            const isEmptyArray = checkedItems === undefined || checkedItems.length === 0;

            //Uncheck case
            if (!isEmptyArray && event.target.checked === false) {
                let index = checkedItems.indexOf(value);
                checkedItems.splice(index, 1);
                return;
            }

            //Check Case
            if (isEmptyArray) {
                checkedItems = new Array();
            }

            checkedItems.push(value);
            setInputs(values => ({ ...values, [inpName]: [...checkedItems] }))
            console.log("text value :- ", event.target.value);
        }
    }

    return (
        <div className='container m-3'>
            <h1>Check Box - Forms!</h1>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor="hobbies" className='mb-3 fs-4'>Hobbies :- </label>
                    {
                        hobbies.map(eachHobbie =>
                            <span key={eachHobbie.id} >
                                <input type='checkbox' className='m-2'
                                    name="hobbies"
                                    value={eachHobbie.value}
                                    onClick={handleModifications} />
                                <label htmlFor="eachHobbie" className='fs-5'>{eachHobbie.value}</label>
                            </span>
                        )
                    }
                </div>

                <input type="submit" value="Submit Form" className='btn btn-primary' />
            </form>
        </div>
    )
}
