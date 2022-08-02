 import React, {useState, useEffect} from 'react';
 import './App.css';
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import Login from "./paginas/Login";
 import Home from "./paginas/Home";
 

function App() {

  /*const[scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageXOffset;
    setScrollHeight = (position); 
  };

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])*/


  
  return (
      <Router>
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
