import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetails(){
    const params = useParams()
    return (
        <h2 className="products_Style"> Selected User Details {params.UserID} are: </h2>
    )
}