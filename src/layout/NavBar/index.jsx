import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import './style.css'

const NavBar = () => {

  return (
    <>
      <nav>
        <h2>BEP</h2>
        <ul className="nav-links">
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="/About">About</NavLink></li>
            <li><NavLink to ="/Albums">Albums</NavLink></li>
            <li><NavLink to ="/Quiz">Quiz</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
    
  )
}

export default NavBar
