import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()
    function handleClick(){
        navigate('orderConfirmed')
    }
    return (
    <>
    <h2>Home Page</h2>
    <button onClick ={handleClick}>Place Order</button>
    </>
    )
}