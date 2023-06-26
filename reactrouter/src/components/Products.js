import React from "react";
import {Link,Outlet} from "react-router-dom"

export default function Products(){
    return (
    <>
    <input type="search" placeholder="Search Products with Name"/>
    <br/>
    <br/>
    <nav>
    <Link to='FeaturedProducts'>Featured Products</Link>
    <Link to='NewProducts'>New Products</Link>
    </nav>
    <br/>
    <h2>Searched Products</h2>
    <Outlet/>
    </>

    )
}