import React from 'react';
import '../style/landing.css';
import { Link } from 'react-router-dom';
import NavComp from './NavComp';
const Landing = () => {
    return (
        <div className='Body'>
            <NavComp />
            <button id='but'><Link to='/subscription' id='mm'>HEAL</Link></button>
        </div>
    );
}

export default Landing;
