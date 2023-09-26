
import { useContext } from 'react';
import {Navbar , Button } from 'react-bootstrap';
import Data from '../context/Data';
function NavComp(){
    const {view,setView} =useContext(Data);
    return(
        <Navbar expand="sm">
        <Navbar.Brand href="/">Echo Wave</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end' >
                <Button style={{display: view?'block':'none'}} onClick={() =>setView(!view)}>My List</Button>
                <Button style={{display: !view?'block':'none'}} onClick={() => setView(!view)}>Play List</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp