import React from 'react';
import '../index.css';

export default function Hero()
{
    return (
        <section className='hero'>
            <img src='./images/photo-grid.png' className='hero_img'></img>
            <h1 className = 'hero_header'>Online Experiences</h1>
            <p className = 'hero_p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}