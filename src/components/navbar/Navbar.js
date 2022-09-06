import React, { useState } from "react";
import { logDOM } from '@testing-library/react';
import "./Navbar.css"
import Logo from "../../media/Logo.png";
import { navItems } from "../NavItems";
import Button from "../Button";
import Dropdown from "../Dropdown";

import { Link } from "react-router-dom";



export const Navbar = ({isScrolling}) => {
  const [dropdown, setDropdown] = useState(false);
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"}); 
    }

  return (
    
    <div className="container">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <img className='imagen' src={Logo}/>
          <a class="navbar-brand" href="#">FQ Córdoba</a>
        <button 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=""
          class = "navbar-toggler"
          aria-controls='navbarnav'
          aria-expanded="false"
          aria-label='Toggle navigation'>
        <span class = "navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"
        id='navbar-nav'>
          <ul class = "navbar-nav">
            {navItems.map((item) => {
              if (item.title === "Usuario") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
    </nav>
    </div>
  );
};



export default Navbar;