import logo from './logo.svg';
import './App.css';
import { store } from './reduxstore/createstore';

function App() {
  return (
    <div className="container">
      <h1>Redux Sample Example</h1>
      <p>Current Value :- {store.getState()} </p>

      <button className="btn btn-danger">Decrement</button>
      <span className='m-3'>{store.getState()}</span>
      <button className="btn btn-primary">Increment</button>
    </div>

  );
}

export default App;
