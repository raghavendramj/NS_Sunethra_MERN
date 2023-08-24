import logo from './logo.svg';
import './App.css';
import Courses from './components/courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import UpdateCourse from './components/updatecourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/update/:id" element={<UpdateCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
