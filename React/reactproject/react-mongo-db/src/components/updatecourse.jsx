import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UpdateCourse() {
    const { id } = useParams();

    const [name, setName] = useState();
    const [category, setCategory] = useState(); 

    useEffect(() => {
        fetchData();
    }, {});

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8100/courses/" + id);
            console.log("Data :- ", response.data);
            const course = response.data[0];
            setName(course.name);
            setCategory(course.category);
        } catch (err) {
            console.error("Error fetching data!");
        }
    }

    const handleNameChange = event => {
        setName(event.target.value);
        console.log("Changed Name :- ", name);
    }

    const handleCategoryChange = event => {
        setCategory(event.target.value);
        console.log("Changed Category :- ", name);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="mt-4">
                    <div>Welcome to UpdateCourse Page : {id}</div>
                    <form action="http://localhost:8100/courses/modifyCourse" method="post">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="name">Course Name:- </label>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" name="name" id="courseName"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                    </td>
                                    <td>
                                        <input type="hidden" className="form-control" name="id"
                                         id="courseId" value={id} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="category">Category Name:- </label>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" name="category" id="category"
                                            value={category}
                                            onChange={handleCategoryChange}
                                        />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <input type="reset" className="btn btn-warning" value="Clear All" />
                                    </td>
                                    <td>
                                        <input type="submit" className="btn btn-primary" value="Update Course" />
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </form>
                </div>
            </div>
        </div>
    )
}
