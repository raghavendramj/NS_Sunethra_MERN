import logo from './logo.svg';
import './App.css';
import UsestateHook from './components/usestate';
import UseEffectHook from './components/useeffect';
import UseEffectHookSquare from './components/useEffect_square';

function App() {
  return (
    <div className='App mt-3'>
      <h2>Welcome to React Topics Revision!</h2>
      {/* <UsestateHook /> */}
      {/* <UseEffectHook /> */}
      <UseEffectHookSquare />
    </div>
  );
}

export default App;
