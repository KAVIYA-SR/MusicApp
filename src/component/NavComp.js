

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavComp(){
  
    return(
        <>
        <h1>Tune<FontAwesomeIcon icon={faMusic}  size="md" /></h1>
        <div className='items'>
            <ul>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>HOME</Link></li>
                <li>SERVICES</li>
                <li>CONTACT</li>
            </ul>
        </div>
        </>
    )
}

export default NavComp