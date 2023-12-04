import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseListing from './CourseListing'
import CourseDetails from './CourseDetails'
import StudentDashboard from './StudentDashboard'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CourseListing/>} />
      <Route path='/course-detailes/:id' element={<CourseDetails/>} />
      <Route path='/student-dashboard' element={<StudentDashboard/>} />
      <Route path='*' element={<h2>Page Not Found 404</h2>} />
    </Routes>
  )
}

export default AllRoutes