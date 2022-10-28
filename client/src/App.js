import './App.css';
import React from "react";
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Plot from 'react-plotly.js';

function App() {

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Covid Analyzer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#query1">Query01</Nav.Link>
                            <Nav.Link href="#query2">Query02</Nav.Link>
                            <Nav.Link href="#query3">Query03</Nav.Link>
                            <Nav.Link href="#query4">Query04</Nav.Link>
                            <Nav.Link href="#query5">Query05</Nav.Link>
                            <Nav.Link href="#sources">Sources</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className="d-flex justify-content-center">
                <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        },
                        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                />
            </div>

        </>
    );
}

export default App;
