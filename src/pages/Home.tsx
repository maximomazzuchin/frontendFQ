import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import videoBG from '../media/new-bg-2.mp4'
import './Home.css'

class Product {
  id: number=0;
  name: string="";
  description: string="";

}




export function Home() {
  const url = "http://127.0.0.1:8000/api/products/"
  

  const [quote, setQuote] = useState<Product[]>([])


  axios.get("http://127.0.0.1:8000/api/products/")  
    .then(res=>{
      res.data.map((p: { id: number; name: string; description: string; }) => {
        let product = new Product();
        product.id = p.id;
        product.name = p.name;
        product.description=p.description;
        quote.push(product)
        // setQuote()
      })
      /*console.log(res.data)*/
      // setQuote(mappedProducts)
    }).catch(err=>{
      console.log(err);
      
    })


    function renderProducts(){
     for (let index = 0; index < quote.length; index++) {
      const product = quote[index];
      return(<h1>{product.name}</h1>)
      
     }
    }

  return <div className='home'>
    <>
    {renderProducts()}
    </>
    <video src= {videoBG} autoPlay loop muted/>
    </div>
}
