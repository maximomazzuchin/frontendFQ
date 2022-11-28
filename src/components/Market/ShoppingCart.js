import React, { useReducer, useState, useEffect } from 'react'
import { Container, Button, Row } from "react-bootstrap"
import axiosInstance from '../../axios';
import { TYPES } from '../../components/actions/shoppingActions';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import Header from "../headers/header";

import "./ShoppingCart.css"

  // ----------------------------------------MARKET GET----------------------------------------

const ShoppingCart = () => {
  
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    axiosInstance.get('http://127.0.0.1:8000/api/products/')
    .then(res => {
        setArticles(res.data)
        localStorage.setItem('products', JSON.stringify(res.data))
        const products = res.data.map((item) => {
          return {
            id: item.id,
            
          }  
          
        })  
      }).catch(err => {
        console.log(err)
      })  
    }, [])    
    
    const shoppingInitialState = {  
      //INITIALIZE_STORE
      products: JSON.parse(localStorage.getItem('products')),
      cart:[] 
    } 
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const { products, cart } = state;
  // ---------------------------------------- MARKET POST ----------------------------------------

   
    
  // ---------------------------------------- BUTTONS ----------------------------------------
  
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  }
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART })
  }
  
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  };

  // ----------------------------------------WhatsApp Msg----------------------------------------
  
   const url_msg = "http://127.0.0.1:8000/api/sales/10/detailswa/"
   let urlwsp_1 = "https://web.whatsapp.com/send/?phone=3516867982&text=*Cliente:*%20Máximo%20Mazzuchin%0A*Productos:*%0A" 
  
                   const [urlwsp, setUrlwsp] = useState([])
                   const carritoLS = JSON.parse(localStorage.getItem('cart'))
                   console.log(carritoLS)

                   
                   axiosInstance.get(url_msg)  
                     .then(res=> {
                  
                      carritoLS.map(p => {
                        console.log(p)
                         
                           urlwsp_1 += "%20" + p.name + "%20(Cantidad:%20" + p.quantity + ", precio:%20$" + p.quantity * p.price + ")%0A" 
                           
                           
                          })
                          setUrlwsp(urlwsp_1)
                    })
                    
  // ----------------------------------------CARRITO----------------------------------------  

  function shoppingReducer(state = [], action) {
    switch (action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id===action.payload);
            let itemInCart = state.cart.find((item) => item.id === newItem.id)
           
            return itemInCart 
            ? {
                ...state,
                cart: state.cart.map(item =>
                 item.id === newItem.id  
                  ? {...item, quantity: item.quantity + 1}
                  :item)
            }      
           :{
                ...state,
                 cart: [...state.cart, {...newItem, quantity:1}],
                }; 
            }    
        
        case TYPES.REMOVE_ONE_FROM_CART:{  
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity: item.quantity -1}: item),
            }    
            :{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };    
        }    
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };    
            
        }    
        case TYPES.INITIALIZE_STORE:{
          return localStorage.getItem('products')
        }  
        case TYPES.CLEAR_CART:
            return shoppingInitialState;

        default:  
            return state;
    }     
    
    // const submitHandler = (e) => {
    //   e.preventDefault();
    //   axiosInstance.post(url,{
    //     patient: localStorage.getItem('patient_id')

    //   })
        
    // }

}    

console.log(cart)
localStorage.setItem('cart', JSON.stringify(cart));


function postingData (){

  const carritomapeado = cart.map((item) => {
    return {
      id: item.id,
      amount: item.quantity,
      price: item.price,
      product: item.name
    }  
    
  })  
  localStorage.setItem('patient_id', 5)
  localStorage.setItem('data_carrito', cart)
  console.log(localStorage.getItem('data_carrito'))
  console.log(carritomapeado)
  
  axiosInstance.post("http://127.0.0.1:8000/api/sales/", {
    patient: localStorage.getItem('patient_id')
  }).then(res => {
    console.log(res.data.id)
    // axiosInstance.post("http://127.0.0.1:8000/api/sales/" + res.data.id + "/detailswa", {
      //    carritomapeado
      //  })
    })
  }
  
  


  // ---------------------------------------- Return ----------------------------------------

  return (
    <Container className='shopping-page' fluid>
      <Header />
      <h1>Productos</h1>
      <br></br>
      <article>

        <Row>
          {articles.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart} />))}
        </Row>

      </article>
      <h3>Carrito</h3>
      <br></br>
      <article>
        <Button variant='primary' onClick={clearCart}>Limpiar Carrito</Button>

        <Row>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))}
        </Row>

      </article>
      
      <Button as="a" size="lg" variant="secondary" href={urlwsp} target="_blank" onClick={postingData}>Realizar Pedido</Button>

    </Container>
  )
}

export default ShoppingCart