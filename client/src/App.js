
import Home from './components/Home';
import Cases from './components/Cases';
import DataSources from './components/DataSources';
import GlobalDist from './components/GlobalDist';
import Vax from './components/Vax';
import {
    BrowserRouter, Routes, Route
} from "react-router-dom"
import React from "react";
import Header from './components/Header';
//import Container from 'react-bootstrap/Container';

function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/cases" element={<Cases/>}/>
                <Route path="/datasources" element={<DataSources/>}/>
                <Route path="/globaldist" element={<GlobalDist/>}/>
                <Route path="/vax" element={<Vax/>}/>
            </Routes>
        </BrowserRouter>  
        </>
    );
}

export default App;
