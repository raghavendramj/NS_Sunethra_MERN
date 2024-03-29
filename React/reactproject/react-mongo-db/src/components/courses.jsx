
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Courses() {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8100/courses/");
            console.log("Data :- ", response.data);
            setCourseData(response.data);
        } catch (err) {
            console.error("Error fetching data!");
        }
    }

    return (

        <div className="App">
            <div className="container">
                <div className="mt-4">
                    <p>Courses - React + Node + Express + Mongo DB Example</p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map(((eachCourse, index) => {
                                return <tr key={eachCourse._id}>
                                    <td>{index + 1}</td>
                                    <td>{eachCourse._id}</td>
                                    <td>{eachCourse.name}</td>
                                    <td>{eachCourse.category}</td>
                                    <td><Link className='btn btn-warning' to={"/courses/update/" + eachCourse._id} >Update Course</Link></td>
                                    <td><Link className='btn btn-danger' to={"http://localhost:8100/courses/deleteCourse/" + eachCourse._id} >Delete Course</Link></td>
                                </tr>
                            }))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div >

    )
}

