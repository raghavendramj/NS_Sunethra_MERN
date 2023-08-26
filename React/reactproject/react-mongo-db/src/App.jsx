import './App.css';
import CoursesRouters from './components/coursesrouters';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container mt-5">
        <h1>Newton School Integration Project</h1>
        <Link className='btn btn-primary m-2' to="/">Home</Link>
        <Link className='btn btn-primary m-2' to="/listCourses">Courses</Link>
        <Link className='btn btn-primary m-2' to="/addNewCourse">Add New Course</Link>

      </div>
      <CoursesRouters />
    </>
  );
}

export default App;
