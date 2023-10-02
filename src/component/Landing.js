import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faMusic} from '@fortawesome/free-solid-svg-icons';
import '../style/landing.css';
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className='Body'>
            <h1>Tune<FontAwesomeIcon icon={faMusic}  size="md" /></h1>
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
