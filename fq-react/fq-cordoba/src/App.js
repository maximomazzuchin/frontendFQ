 import React, {useState, useEffect} from 'react';
 import './App.css';
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import { Navbar } from "../src/components/navbar/Navbar";
 import Login from "./paginas/Login";
 import Home from "./paginas/Home";


function App() {

  
  return (
      <Router>
         <div className="Navbar">
            <Navbar/>
          </div>  
        <Routes>
          <Route path="/home" element= {<Home />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
      </Router>
    );
  

  
  /*return (
    <div className="App">
      <Navbar isScrolling = {scrollHeight}/>
      <COVER />
      <Slider/>
    </div>
  );*/
  
  }

export default App;
