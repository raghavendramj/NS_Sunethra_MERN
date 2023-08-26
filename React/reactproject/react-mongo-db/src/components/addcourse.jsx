import React from 'react'

export default function AddCourse() {
    return (
        <div className="App">
            <div className="container">
                <div className="mt-4">
                    <div>Welcome to Add Course Page</div>
                    <form action="http://localhost:8100/courses/" method="post">
                        <table>
                            <tbody>
                                <tr className='mt-3'>
                                    <td>
                                        <label htmlFor="name">Course Name:- </label>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" name="name" />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <label htmlFor="category">Category Name:- </label>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" name="category" />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <input type="reset" className="btn btn-warning" value="Clear All" />
                                    </td>
                                    <td>
                                        <input type="submit" className="btn btn-primary" value="Add Course" />
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
