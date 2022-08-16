import React from 'react'
import Logo from "../media/Logo.png";


const Products = () => {
  return (
    <>
    <h1 className="title">PRODUCTOS</h1>
    <div className="productos">
      <div className='producto'>
        <img className='imagen' src={Logo}/>
      </div>
      <div className='product-footer'>
        <h1> Title </h1>
        <p className='price'>$111</p>
      </div>
      <div className='button'>
        <button className='btn'>
            Añadir al carrito
        </button>
        <div>
          <a href='#' className='btn'>Vista</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products