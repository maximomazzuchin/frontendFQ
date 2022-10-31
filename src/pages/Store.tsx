import { Col, Row, Button } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import {Product} from "../components/Product"
import fondo from "../../public/imgs/back_1.png"

export function Store() {

  const url = "http://127.0.0.1:8000/api/products/"
  
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get(url)  
      .then(res=>{
        res.data.map((p: { id: number; name: string; description: string; price: number; image_link: string; }) => {
          let product = new Product();
          product.id = p.id;
          product.name = p.name;
          product.price = p.price
          product.image_link = p.image_link
          products.push(product)
        })
    }).catch(err=>{
      console.log(err);    
    })
  }, []);
  
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
