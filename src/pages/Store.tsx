import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Product} from "../components/Product"

export function Store() {

  const url = "http://127.0.0.1:8000/api/products/"
  

  const [quote, setQuote] = useState<Product[]>([])

  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")  
      .then(res=>{
        res.data.map((p: { id: number; name: string; description: string; price: number; }) => {
          let product = new Product();
          product.id = p.id;
          product.name = p.name;
          product.price = p.price
          quote.push(product)
          // setQuote()
        })
      
        // setQuote(mappedProducts)
      }).catch(err=>{
        console.log(err);
        
      })
  }, [])
  
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {quote.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
