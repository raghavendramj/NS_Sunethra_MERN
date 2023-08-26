import React from 'react'
import Courses from './courses';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import UpdateCourse from './updatecourse';
import AddCourse from './addcourse';

export default function CoursesRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addNewCourse" element={<AddCourse />} />
      <Route path="/listCourses" element={<Courses />} />
      <Route path="/courses/update/:id" element={<UpdateCourse />} />
    </Routes>
  )
}
