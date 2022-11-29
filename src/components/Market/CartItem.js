import React from 'react'
import { Button, Col } from "react-bootstrap"

import "./ProductItem.css"

const CartItem = ({data, delFromCart}) => {
  let {id, name, price, quantity, image_link} = data;
  return (

    <Col sm={12} md={6} lg={4}>
      <br></br>
      <div  className='product-card'>
        <div className='product-img-container'>
          <img src = {image_link} className="product-img"></img>
        </div>
          <h4>{name}</h4>
          <h5>${price} x {quantity} Total: $ {price * quantity}</h5>
          <div >
          <Button variant="secondary" className='margin' onClick={()=> delFromCart(id)}>Eliminar uno</Button>
          <Button variant="danger" onClick={()=> delFromCart(id, true)}>Eliminar Todo</Button>
          </div> 
      </div>
    </Col>
  )
}

export default CartItem