import {Navbar , Button , Modal , Container} from 'react-bootstrap';

function NavComp(){
    return(
        <Navbar expand="sm">
            <Navbar.Brand href="/">Echo Wave</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end' >
                <Button>My List</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp