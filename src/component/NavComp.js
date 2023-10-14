import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function NavComp(){
    
    return(
        <div className='main'>
        <h2>Tune<FontAwesomeIcon icon={faMusic}  size="md" /></h2>
        <div className='items'>
            <ul>
                <li><Link to='/' style={{textDecoration:'none',color:'#0D393B'}}>HOME</Link></li>
                <li><Link to='/subscription' style={{textDecoration:'none',color:'#0D393B'}}>SERVICES</Link></li>
                {/* <li><Link to='/contact' style={{textDecoration:'none',color:'black'}}>CONTACT</Link></li> */}
            </ul>
        </div>
        </div>
    )
}

export default NavComp