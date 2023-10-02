import React from 'react';

import '../style/landing.css';
const Landing = () => {
    return (
        <div className='Body'>
            <h1>Tune</h1>
            <div className='items'>
                <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <button>HEAL</button>
        </div>
    );
}

export default Landing;
