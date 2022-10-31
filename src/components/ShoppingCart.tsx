import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  const user = {
    name: "Mauricio"
  };



const url = "http://127.0.0.1:8000/api/sales/10/details/"
let urlwsp_1 = "https://web.whatsapp.com/send/?phone=3516867982&text=*Cliente:*%20Mazzu%0A*Productos:*%0A" 

                const [urlwsp, setUrlwsp] = useState<string>()
                axios.get(url)  
                  .then(res=>{
                    res.data.map((p: { amount: number; product:{name: string; price: number;} }) => {
                      urlwsp_1 += "%20" + p.product.name + "%20(Cantidad:%20" + p.amount + ", precio:%20" + p.amount * p.product.price + ")%0A" 
                      setUrlwsp(urlwsp_1)
                    })
              

                  }).catch(err=>{
                    console.log(err);    
                  })

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5 d-flex flex-column">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {                
                const item = cartItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
                // return total + 10 * cartItem.quantity
              }, 0)
            )}
            <Button variant="contained" 
              href={urlwsp} target="_blank">Realizar Pedido</Button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
