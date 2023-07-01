import React, { useState } from 'react'

export default function FormElements() {

    const [inpfield, setInpfield] = useState("DefaultFromState");

    return (
        <div className='container m-3'>
            <h1>Basic Forms!</h1>
            <form action="">
                <div className='form-group'>
                    <label htmlFor="username" className='mb-3 fs-4'>Enter Username :- </label>
                    <input type="text" className='form-control'
                        name="username"
                        value={inpfield}
                        onChange={event => setInpfield(event.target.value)}
                    />
                </div>
            </form>
            <div className='mr-5 mt-5'>
                <p className='fs-4'>Current Form Values! </p>
                <div>{inpfield}</div>
            </div>
        </div>

    )
}
