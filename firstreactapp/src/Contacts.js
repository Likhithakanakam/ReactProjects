import React from 'react';
import './index.css';

export default function Contacts({img,name,number,mail}){
    return(
            <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./phone-icon.png" />
                    <p>{number}</p>
                </div>
                <div className="info-group">
                    <img src="./mail-icon.png" />
                    <p>{mail}</p>
                </div>
            </div>
    )
}