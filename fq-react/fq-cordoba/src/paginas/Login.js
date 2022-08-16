import './Login.css';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Logo from "../media/Logo.png";

import { Component } from 'react';




function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center w-100">
        <img className='imagen' src={Logo}/>
        <h1 className="fs-3 fw-normal mb-3">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email Adress" autoComplete="userName" className="position-relative"/>
        </Form.Group>    
        <Form.Group controlId="sign-in-password" className="mb-3">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative"/>
        </Form.Group>
        <Form.Group controlId="remember-me" className="d-flex justify-content-center mb-3">
          <Form.Check label="Remember me">
          </Form.Check>
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg" className="mb-3">Sign in</Button>
        </div>
        <div className="d-grid">
          <p>
            <a href="#">¿Olvidaste tu contraseña?</a> O <a href="/register">Registrate</a>
          </p>
        </div>
        <p className="mt-5 text-muted">&copy; 2022-2023</p>
      </Form>
    </Container>
  );
}

export default App;
