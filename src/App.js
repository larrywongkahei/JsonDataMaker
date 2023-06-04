import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Components/Contact"
import { Home } from './Components/Home';

function App() {
  return (
    <Router className="App">
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
     </Routes>
    </Router>
  );
}

export default App;
