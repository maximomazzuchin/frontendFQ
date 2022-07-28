 import React, {useState, useEffect} from 'react';
 import './App.css';
 import { Navbar } from './components/navbar/Navbar';
 import { COVER } from './components/COVER/Cover';
 import { Slider } from './components/slider/Slider';


function App() {

  const[scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageXOffset;
    setScrollHeight = (position); 
  };

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling = {scrollHeight}/>
      <COVER />
      <Slider/>
    </div>
  );
}

export default App;
