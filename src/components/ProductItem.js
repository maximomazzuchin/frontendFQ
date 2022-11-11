import React from 'react'
import { Button, Card } from "react-bootstrap"

const ProductItem = ({data, addToCart}) => {
  let{id, name, price, image_link} = data  
  return (
    <div style={{border:"thin solid gray", padding: "1rem"}}>
        <img src = {image_link} height="200px" style={{ objectFit: "cover" }}></img>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={()=> addToCart(id)}>Agregar Producto</button>
    </div>
  )
}

export default ProductItem