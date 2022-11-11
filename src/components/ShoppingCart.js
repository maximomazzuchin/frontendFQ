import React, { useReducer, useState, useEffect } from 'react'
import { Button, Offcanvas, Stack } from "react-bootstrap"
import axios from 'axios'
import { TYPES } from './actions/shoppingActions';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import Header from "./header";
import coverVideo from '../media/coverVideo.mp4';

// import { products } from "products from get";


// getProducts().then(res => {
//     const products = res;
//     console.log(products)
// })
// const product = getProducts()
// console.log(product)

const shoppingInitialState = {  
  products: [
     {id: 1, name: "Test Product 1", price: 265, image_link: "https://i.pinimg.com/564x/36/d7/77/36d777928c2e94fa3955f3c9ce084824.jpg"},
     {id: 2, name: "Test Product 2", price: 365, image_link: "https://i.pinimg.com/564x/ef/4a/a5/ef4aa57186c9c72e63247b6d0aa049f6.jpg"}
   ],
  cart:[] 
}

// ----------------------------------------MARKET----------------------------------------


const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const { products, cart } = state;

  const addToCart = (id) => {
    console.log(id)
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  }
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART })
  }

  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(res => {
        console.log(res.data)
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

// ----------------------------------------CARRITO----------------------------------------
  

  function shoppingReducer(state, action) {
    switch (action.type){
        case TYPES.ADD_TO_CART:{
          console.log(res.data)
          //   console.log(state.products)
          //   let newItem = state.products.find(product => product.id===action.payload);
          //   let itemInCart = state.cart.find((item) => item.id === newItem.id)
           
          //   return itemInCart 
          //   ? {
          //       ...state,
          //       cart: state.cart.map(item =>
          //        item.id === newItem.id 
          //         ? {...item, quantity: item.quantity + 1}
          //         :item)
          //   }
          //  :{
          //       ...state,
          //        cart: [...state.cart, {...newItem, quantity:1}],
          //       };
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
        case TYPES.CLEAR_CART:
            return shoppingInitialState;

        default:
            return state;
    }
}

// ----------------------------------------WhatsApp Msg----------------------------------------

// const url_msg = "http://127.0.0.1:8000/api/sales/10/detailswa/"
// let urlwsp_1 = "https://web.whatsapp.com/send/?phone=3516867982&text=*Cliente:*%20Máximo%20Mazzuchin%0A*Productos:*%0A" 

//                 const [urlwsp, setUrlwsp] = useState([])
//                 axios.get(url_msg)  
//                   .then(res=>{
//                     res.data.map((p: { amount; product:{name}; price; }) => {
//                       urlwsp_1 += "%20" + p.product.name + "%20(Cantidad:%20" + p.amount + ", precio:%20$" + p.amount * p.price + ")%0A" 
//                       setUrlwsp(urlwsp_1)
//                     })
              

//                   }).catch(err=>{
//                     console.log(err);    
//                   })

  return (
    <div>
      <Header />
      <br /><br /><br />
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {articles.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart} />))}

      </article>
      <h3>Carrito</h3>
      <article className='box'>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
      {/* <Button variant="contained" 
              href={urlwsp} target="_blank">Realizar Pedido</Button> */}
    </div>
  )
}

export default ShoppingCart