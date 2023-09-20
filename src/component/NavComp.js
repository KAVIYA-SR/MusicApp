import { useContext } from 'react';
import {Navbar , Button } from 'react-bootstrap';
import Data from '../context/Data';

function NavComp(){
    const{view,Changeview}=useContext(Data)
    const view1=view
    function ch(){
        
    }
    return(
        <Navbar expand="sm">
            <Navbar.Brand href="/">Echo Wave</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end' >
                <Button style={{display:view1?'block':'none'}} onClick={Changeview}>My List</Button>
                <Button style={{display: !view1?'block':'none'}} onClick={Changeview}>playlist</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp