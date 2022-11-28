import React from 'react'
import { Button, Col } from "react-bootstrap"

import "./ProductItem.css";

const ProductItem = ({data, addToCart}) => {
  let{id, name, price, image_link} = data  
  return (
    <Col sm={12} md={6} lg={4}>

      <div className='product-card'>
          <div className='product-img-container'>
            <img className='product-img' src={image_link}></img>
          </div>
          <h4>{name}</h4>
          <h5>${price}</h5>
          <Button variant="success" onClick={()=> addToCart(id)}>Agregar Producto</Button>
      </div>
    
    </Col>
  )
}

export default ProductItem