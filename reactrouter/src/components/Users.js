import React from "react";
import {NavLink,Outlet,useSearchParams} from "react-router-dom"
import "../index.css"

export default function Users(){
    const [searchParams,setSearchParams] = useSearchParams()

    return (
    <>
    <ul>
    <li><NavLink to='1'> User 1</NavLink></li>
    <li><NavLink to='2'> User 2</NavLink></li>
    <li><NavLink to='3'> User 3</NavLink></li>
    <br/>
    </ul>
    <Outlet/>
    <br/>
    <button onClick={()=>setSearchParams({filter:"active"})}> Active Users </button>
    <button onClick={()=>setSearchParams({})}> Reset filters </button>
    <div>
        {
    searchParams.get("filter") === "active" ? <h3> Active Users are:</h3> : <h3>All Users:</h3>
        }
    </div>
    </>
    )
}