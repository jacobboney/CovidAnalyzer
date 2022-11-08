import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


/*
Bootswatch Config
 */
import "bootswatch/dist/journal/bootstrap.min.css";

/*
React Bootstrap config
 */
import 'react-bootstrap/dist/react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css'

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Cases from "./pages/Cases";
import Vaccinations from "./pages/Vaccinations";
import GlobalDistribution from "./pages/GlobalDistribution";
import DataSources from "./pages/DataSources";


ReactDOM.render(
    <React.StrictMode>
      <Router>
          <Navigation />
        <Routes>
            <Route exact path="/" element={<App/>} />
            <Route path="cases" element={<Cases/>} />
            <Route path="vaccinations" element={<Vaccinations />} />
            <Route path="global-distributions" element={<GlobalDistribution/>} />
            <Route path="data-sources" element={<DataSources/>} />
        </Routes>
          <Footer />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
