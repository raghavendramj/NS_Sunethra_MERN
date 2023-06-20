import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
 

function App() {
  const myToDos = useSelector(state => state)
  const todoText = useRef("");
  let newId = 0;


  const dispatch = useDispatch();
  return (
    <div className='container m-3'>
      <h1>ToDo Application</h1>

      <table className='table table-striped'>
        <thead>
          <th>Id</th>
          <th>Text</th>
          <th>Is Completed?</th>
        </thead>
        <tbody>
          {myToDos.map(eachTodo => {
            return <tr key={eachTodo.id}>
              <td>{eachTodo.id}</td>
              <td>{eachTodo.text}</td>
              <td>{JSON.stringify(eachTodo.completed)}</td>
            </tr>
          })}
        </tbody>
      </table>

      <div>
        <label htmlFor="todo">Add Todo :- </label>
        <input type="text" name="todo" ref={todoText} className='form-control' />

        <button className='btn btn-primary mt-3' onClick={() => {
          dispatch({ 
            id:newId++,
            type: 'add_todo',
            text: todoText.current.value
          }); 
        }}>Add TODO</button>
      </div>
    </div>
  );
}

export default App;
