import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {

  const count = useSelector(state => state);
  const enteredValue = useRef(0);
  const dispatch = useDispatch();

  function incrementDecrementValue(operationType) { 
    let incrementOrDecrementAction = {
      type: operationType
    }; 
    const val = enteredValue.current.value; 
    if (val) {
      incrementOrDecrementAction.payload = parseInt(val); //action -> {type:'increment, payload: 45}
    }
    dispatch(incrementOrDecrementAction);
  }
  return (
    <div className="container">
      <h1>Redux Sample Example</h1>
      <p className='h1 mt-5 mb-5'>Current Value :- {count} </p>

      <div>
        <label htmlFor="value" className='mb-3'>Increment/Decrement By Value :- </label>
        <input type="text" ref={enteredValue} className='form-control mb-3 h1' />
      </div>

      <button className="btn btn-danger" onClick={() => incrementDecrementValue('decrement')}><p class="h2">Decrement</p></button>
      <span className='m-3 h1'>{count}</span>
      <button className="btn btn-primary" onClick={() => incrementDecrementValue('increment')}><p class="h2">Increment</p></button>
    </div>

  );
}

export default App;
