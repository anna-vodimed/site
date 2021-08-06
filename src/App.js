import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

import { LanguageProvider } from "./languages/Language";
//lang select button
import LanguageSelector from "./languages/LanguageSelector";


export default function App() {
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
    
    </div>
    </LanguageProvider>
    </Router>
    </>
    );
  }
