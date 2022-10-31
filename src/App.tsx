import React from "react"
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import {Navbar} from "./components/Navbartsx"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/market" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
