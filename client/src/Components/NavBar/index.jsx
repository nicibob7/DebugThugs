import React from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"

const NavBar = () => {
    const style = {textDecoration: "none", fontWeight: "bold", color: "color: var(--PuertoRico)"}
  return (
    <div id="NavBar">
        <div className="mainNav">
            <NavLink to="/" style={style}>Home | </NavLink>
            <NavLink to="/" style={style}>Profile | </NavLink>
            <NavLink to="/" style={style}>Timetable </NavLink>
        </div>
        <div className="loginNav">
            <NavLink to="/" style={style}>| Login </NavLink>
        </div>
    </div>
  )
}

export default NavBar
