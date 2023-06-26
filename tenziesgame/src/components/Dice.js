import React from "react";

export default function Dice({id,value,isHeld,handleClick}){
    const dots = Array.from({ length: value }, (_, index) => (
        <div key={index} className="dot"></div>
      ));
    return (
        <div className={`dice_label ${isHeld && "die_held"}`} 
        onClick={()=>handleClick(id)}>
        {
           dots
        }
        </div>
    )
}