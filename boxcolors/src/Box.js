import React from "react" ;

export default function Box(props){

return (
    <div className="box"
        style={{backgroundColor : props.on ? "#222222" : "transparent" }}
        onClick={() => props.handleClick(props.id)}
    >

    </div>
)
}
