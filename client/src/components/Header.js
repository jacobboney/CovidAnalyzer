import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Covid Analyzer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#query1">CASES</Nav.Link>
                            <Nav.Link href="#query2">VACCINATIONS</Nav.Link>
                            <Nav.Link href="#query3">GLOBAL DISTRIBUTION</Nav.Link>
                            <Nav.Link href="#query4">DATA SOURCES</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
    )
}

export default Header