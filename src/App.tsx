import React from "react"
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Home from "./pages/Home"
import Navbar from "./components/NavBar/NavBar"
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element = {<Login />} />
          <Route path="/Register" element = {<Register />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
