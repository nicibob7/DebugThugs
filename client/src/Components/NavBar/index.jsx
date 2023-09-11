import React from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"

const NavBar = () => {
    const style = {textDecoration: "none", fontWeight: "bold", color: "color: var(--PuertoRico)"}
  return (
    <nav>
      <div id="NavBar">
          <div className="mainNav">
              <NavLink to="/" style={style}>Home | </NavLink>
              <NavLink to="/profile" style={style}>Profile | </NavLink>
              <NavLink to="/timetable" style={style}>Timetable </NavLink>
          </div>
          <div className="loginNav">
              <NavLink to="/login" style={style}>| Login </NavLink>
          </div>
      </div>
    </nav>
  )
}

export default NavBar
