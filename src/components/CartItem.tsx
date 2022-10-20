import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import {Product} from "../components/Product"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  // const item = storeItems.find(i => i.id === id)

  const url = "http://127.0.0.1:8000/api/products/" + id
  

  const [item, setItem] = useState<Product>()

  

  axios.get(url)  
    .then(res=>{
      let product = new Product();
        product.id = res.data.id;
        product.name = res.data.name;
        product.price = res.data.price;
      
     
      setItem(product)
      
    }).catch(err=>{
      console.log(err);
      
    })
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        // src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}