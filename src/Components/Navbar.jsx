import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="sidebar">
    <NavLink to="/">Courses</NavLink>
    <NavLink to="/student-dashboard" >Dashboard</NavLink>
   
  </nav>
  )
}

export default Navbar