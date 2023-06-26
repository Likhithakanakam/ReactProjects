import React from 'react'
import '../index.css'

export default function Main(props)
{
    return (
        <main className={props.mode ? "Dark" : ""}>
            <h1 className='Main_h1'> Fun facts about React </h1>
            <ul className='Main_li'>
             <li> Was first released in 2013 </li>
             <li> Was originally created by Jordan Walke </li>
             <li> Has well over 100K stars on Github </li>
             <li> Is maintained by Facebook </li>
             <li> Powers thousands of enterprise apps, including mobile apps </li>
            </ul>
        </main>
        
    )
}