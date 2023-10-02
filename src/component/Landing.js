import React from 'react';

import '../style/landing.css';
import { Link } from 'react-router-dom';
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
            <button id='but'><Link to='/subscription' id='mm'>HEAL</Link></button>
        </div>
    );
}

export default Landing;
