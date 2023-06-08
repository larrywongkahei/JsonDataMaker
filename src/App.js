import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomJson } from './Components/CustomJson';
import { NarBar } from './Components/NavBar';
import { Home } from './Components/Home';

function App() {
  return (
    <Router className="App">
      <NarBar />
      <Routes>
        <Route path='/*' element = {<Home />} />
        <Route path='/customjson' element={<CustomJson />} />
      </Routes>
    </Router>
  );
}

export default App;
