

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Data from '../context/Data';

function NavComp(){
    const {text,setText}=useContext(Data);
    return(
        <>
        <h1>Tune<FontAwesomeIcon icon={faMusic}  size="md" /></h1>
        <div className='items'>
            <ul>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>HOME</Link></li>
                <li><Link to='/subscription' style={{textDecoration:'none',color:'black'}}>SERVICES</Link></li>
                <li style={{textDecoration:'none',color:'black',display : !text ? 'block':'none' }} onClick={() => setText(!text)}>PREVIOUS</li>
            </ul>
        </div>
        </>
    )
}

export default NavComp