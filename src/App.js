import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Components/Contact"
import { CustomJson } from './Components/CustomJson';
import { NarBar } from './Components/NavBar';
import { Home } from './Components/Home';

function App() {
  return (
    <Router className="App">
      <NarBar />
     <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/customjson' element={<CustomJson />} />
        <Route path='/contact' element={<Contact />}/>
     </Routes>
    </Router>
  );
}

export default App;
