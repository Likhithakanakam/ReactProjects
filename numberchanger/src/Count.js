import React from 'react';
import './index.css';

export default function Count({number}){
    return (
        <div className="counter--count">
            <h1>{number}</h1>
        </div>
    )
}