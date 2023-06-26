import React from 'react';
import '../index.css';

export default function Card(props)
{
    let badgeText
    if (props.item.openSlots === 0) {
    badgeText = "SOLD OUT"
    } 
    else if (props.item.location === "Online") {
    badgeText = "ONLINE"
    }
    return (
        <section className='card'>
            {badgeText && <div className="card_badge">{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`} className='card_img'></img>
            <div className="card_stats">
                <img src="./images/star.png" className='card_star'/>
                <p>{props.item.stats.rating}</p>
                <p className='gray'>({props.item.stats.reviewCount}) • </p>
                <p className='gray'>{props.item.location}</p>
            </div>
            <p>{props.item.title}</p>
            <p><strong>From ${props.item.price}</strong> / person</p>
            
        </section>
    )
}