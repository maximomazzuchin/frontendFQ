import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Login from "./paginas/Login";
import Home from "./paginas/Home";
import Mercado from "./paginas/Mercado";
import Register from "./paginas/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/Login" element = {<Login />} />
          <Route path="/Market" element = {<Mercado />} />
          <Route path="/Register" element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </>
    
    );
  


  }

export default App;
