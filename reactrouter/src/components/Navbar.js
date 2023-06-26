import React from "react";
import {NavLink} from "react-router-dom"
import '../index.css'

export default function Navbar(){
    function handleStyle({isActive}){
        return {
            fontWeight:isActive? 'bold' : 'Normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }
    return (
    <nav className="primary_nav">
    <NavLink to='/' style={handleStyle}>Home</NavLink>
    <NavLink to='/about' style={handleStyle}>About</NavLink>
    <NavLink to='/Products' style={handleStyle}>Products</NavLink>
    <NavLink to='/Users' style={handleStyle}>Users</NavLink>
    <NavLink to='/Profile' style={handleStyle}> Profile</NavLink>
    </nav>
    )
}