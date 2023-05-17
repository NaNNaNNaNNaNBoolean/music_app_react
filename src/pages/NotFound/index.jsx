import React from 'react'
import {Link, useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
  return (
    <h1>Page <span style={{ color: "firebrick" }}>{location.pathname}</span> not found
    <Link to ='/'style={{ color: "firebrick", fontWeight: "bold" }}  >Home Page &rarr;</Link>
    </h1>
  )
}

export default NotFound
