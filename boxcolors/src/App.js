import React from "react"
import './App.css'
import boxes from "./boxes"
import Box from "./Box";

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
    <Box key={square.id} 
         id={square.id}
         on={square.on} 
         handleClick={toggle}></Box>
    ))

    function toggle(id){
        setSquares(prevArray => (prevArray.map(s => (
                                                     s.id === id ? {...s,on:!s.on} : s )))
         )
    }
    return (
        <main>
            {squareElements}
        </main>
    )
}
