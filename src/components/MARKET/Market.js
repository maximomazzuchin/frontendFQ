import React, {useState, useEffect} from 'react';
import "./Market.css";


export const Market = () => {
  

    const[scrollHeight, setScrollHeight] = useState(0);
  
    const handleScroll = () => {
      const position = window.pageXOffset;
      setScrollHeight = (position); 
    };
  
    useEffect (() => {
      window.addEventListener("scroll", handleScroll);
    }, [scrollHeight])
  
      return (
          <div className="container">
          </div> 
      );
    }
  

export default Market;