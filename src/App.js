import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';


import { LanguageProvider } from "./languages/Language";
import LanguageSelector from "./languages/LanguageSelector";


function App() {
  return (
      <>
    <Router>
    <LanguageProvider>
    <div className="App">
    <div>
    <LanguageSelector />
    </div>
    <Navbar />

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/about">
    <About />
    </Route>

    <Route path="/portfolio">
    <Portfolio />
    </Route>

    <Route path="/contact">
    <Contact />
    </Route>
    
    
    </div>
    </LanguageProvider>
    </Router>
    </>
    );
  }
  
  export default App;
