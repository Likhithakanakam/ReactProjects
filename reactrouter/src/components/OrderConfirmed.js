import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmed(){
    const navigate = useNavigate()
    function handleClick(){
        navigate(-1)
    }
    return (
    <>
    <h2>Order Confirmed! Thank you....</h2>
    <button onClick ={handleClick}> Go Back</button>
    </>
    )
}