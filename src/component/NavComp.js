import { useContext } from 'react';
import {Navbar , Button } from 'react-bootstrap';
import Data from '../context/Data';

function NavComp(){
    const{view,changeview}=useContext(Data)
    return(
        <Navbar expand="sm">
            <Navbar.Brand href="/">Echo Wave</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end' >
                <Button style={{display:view?'block':'none'}} onClick={changeview}>My List</Button>
                <Button style={{display: !view?'block':'none'}} onClick={changeview}>playlist</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp