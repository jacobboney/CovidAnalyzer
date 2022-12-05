import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"



const Navigation = () =>{
        return(
                <Navbar bg="primary" variant="dark" expand="lg" style={{marginBottom: "0"}}>
                    <div className="container">
                        <LinkContainer to="/">
                        <Navbar.Brand href="/">Covid Analyzer</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to="/cases"><Nav.Link>Cases</Nav.Link></LinkContainer>
                                <LinkContainer to="/vaccinations"><Nav.Link>Vaccinations</Nav.Link></LinkContainer>
                                <LinkContainer to="/global-distributions"><Nav.Link>Global Distributions</Nav.Link></LinkContainer>
                                <LinkContainer to="/data-sources"><Nav.Link>Data Sources</Nav.Link></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
        )
}

export default Navigation;