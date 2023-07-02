import logo from './logo.svg';
import './App.css';
import UsestateHook from './components/usestate';
import UseEffectHook from './components/useeffect';
import UseEffectHookSquare from './components/useEffect_square';
import Usecallbak from './components/usecallbak';
import FormElements from './components/FormElements';
import MultipleFormElements from './components/MultipleFormElements';
import CheckBox from './components/CheckBox';

function App() {
  return (
    <div className='container mt-3'>
      <h2>Welcome to React Topics Revision!</h2>
      {/* <UsestateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHookSquare /> */}
      {/* <Usecallbak /> */}
      {/* <FormElements /> */}
      {/* <MultipleFormElements /> */}
      <CheckBox />
    </div>
  );
}

export default App;
