import logo from './logo.svg';
import './App.css';
import Courses from './components/courses'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
