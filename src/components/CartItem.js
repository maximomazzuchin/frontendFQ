import React from 'react'

const CartItem = ({data, delFromCart}) => {
  let {id, name, price, quantity, image_link} = data;
  return (
    <div style={{borderBottom: "thin solid gray"}}>
        <img src = {image_link} height="200px" style={{ objectFit: "cover" }}></img>
        <h4>{name}</h4>
        <h5>${price} x {quantity} Total: $ {price * quantity}</h5>
        <button onClick={()=> delFromCart(id)}>Eliminar uno</button>
        <br/>
        <button onClick={()=> delFromCart(id, true)}>Eliminar Todo</button>
        <br/>
        <br/>
    </div>
  )
}

export default CartItem