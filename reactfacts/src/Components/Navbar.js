import React from 'react'
import '../index.css'

export default function Navbar(props)
{
    return (
        <nav className={`Container ${props.mode ? "Dark" : ""}`}>
            <img src = "./logo512.png" alt="React_Logo" className='Container_image'></img>
            <h1 className='Container_heading1'>ReactFacts</h1>
            <label class="toggle">
                <span class="text-left">Light</span>
                <input type="checkbox"
                       onChange={props.toHandleChange}
                       checked={props.mode}/> 
                <span class="slider"></span>
                <span class="text-right">Dark</span>
            </label>

        </nav>
    )
}