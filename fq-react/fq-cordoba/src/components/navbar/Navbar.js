import { logDOM } from '@testing-library/react';
import React from 'react'
import "./Navbar.css"
import Logo from "../../media/Logo.png";

export const Navbar = ({isScrolling}) => {

    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"}); 
    }

  return (
    
    <div class="container">
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
            <li class = "nav-item active">
              <a href='/home' class = "nav-link">
                Inicio
              </a>
            </li>
            <li class = "nav-item active">
              <a href='/login' class = "nav-link">
                Log in
              </a>
            </li> 
            <li class = "nav-item active">
              <a href='#' class = "nav-link">
                Donaciones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;