
import {Navbar , Button } from 'react-bootstrap';
function NavComp(){
    return(
        <Navbar expand="sm">
        <Navbar.Brand href="/">Echo Wave</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end' >
                <Button >My List</Button>
                {/* <Button style={{display: !view1?'block':'none'}} onClick={ch}>playlist</Button> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp