import React from 'react'
import './index.css'

export default function Header()
{
  return (
    <header>
      <nav className = "list-container">
      <img src="./logo512.png" alt="React_logo" className = "imageCss"/>
      <ul className = "list-container" align = "right"> 
        <li> Pricing </li>
        <li> About </li>
        <li> Contact </li>
      </ul>
      </nav>
    </header>
  )
}