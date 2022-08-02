import React, {useState, useEffect} from 'react';
import { COVER } from '../components/COVER/Cover';
import { Slider } from '../components/slider/Slider';
import { Navbar } from "../components/navbar/Navbar";


function Home(){

  const[scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageXOffset;
    setScrollHeight = (position); 
  };

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

    return (
      <div className="Home">
        <COVER />
        <Slider/>
        <Navbar/>
      </div>  
    );
  

};

export default Home;