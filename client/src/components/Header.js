import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    NavLink
} from "react-router-dom"

function Header(){
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand><NavLink className="headerLink" to="/">Covid Analyzer</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="headerLink" to="/">HOME</NavLink>
                            <NavLink className="headerLink" to="/cases">CASES</NavLink>
                            <NavLink className="headerLink" to="/cases">CASES</NavLink>
                            <NavLink className="headerLink" to="/vax">VACCINATIONS</NavLink>
                            <NavLink className="headerLink" to="/globaldist">GLOBAL DISTRIBUTION</NavLink>
                            <NavLink className="headerLink" to="/datasources">DATA SOURCES</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
    )
}

export default Header