import React, { useCallback, useRef, useState } from 'react'

export default function Usecallbak() {
    const [number, setNumber] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        console.log("increment alled! ", number);
        setNumber(number => number + 1);
    }

    const addTodo = () => {
        console.log("addTodo Called! ", todos);
        setTodos(todo => [...todo, "New Todo"])
    }

    return (
        <div className="container m-3">
            <div>Usecallback</div>
            <h2>Number :- {number}</h2>
            <button className='btn btn-primary m-3' onClick={increment}>Increment</button>
            {todos.map(each => <li>{each}</li>)}
            <button className='btn btn-warning m-3' onClick={addTodo}>Add Todo</button>
        </div>
    )
}  
