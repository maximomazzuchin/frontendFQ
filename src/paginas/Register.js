import './Register.css';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="register-form" className="w-100 text-center bg-white">
        <img className="fq-logo" src="data:image/jpeg;base64,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" alt="IMG"></img>
        <h1 className="fs-3 fw-normal mb-3">Registro</h1>
        <Row>
          <Col md={{ span: 6}}><Form.Group controlId="register-username" className="mb-1">
          <Form.Control type="text" size="lg" placeholder="Usuario" autoComplete="on" className="position-relative" required/>
          </Form.Group>
          </Col>
          <Col md={{ span: 3}}><Form.Group controlId="register-nombre" className="mb-1">
          <Form.Control type="text" size="lg" placeholder="Nombre" autoComplete="on" className="position-relative" required/>
          </Form.Group>
          </Col>
          <Col md={{ span: 3}}><Form.Group controlId="register-apellido" className="mb-1">
          <Form.Control type="text" size="lg" placeholder="Apellido" autoComplete="on" className="position-relative" required/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col><Form.Group controlId="register-password" className="mb-1">
          <Form.Control type="password" size="lg" placeholder="Contraseña" autoComplete="off" className="position-relative" required/>
          </Form.Group>
          </Col>
          <Col><Form.Group controlId="register-email" className="mb-1">
          <Form.Control type="email" size="lg" placeholder="Email" autoComplete="off" className="position-relative" required/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col><Form.Group controlId="register-provincia" className="mb-1">
            <select class="form-control form-control-lg position-relative" type="text" size="lg" placeholder="Provincia" autoComplete="on" required>
              <option>Provincia</option>
              <option>Cordoba</option>
              <option>Buenos Aires</option>
              <option>Santa Fe</option>
              <option>Tierra del Fuego</option>
              <option>Santa Cruz</option>
              <option>Chubut</option>
              <option>Rio Negro</option>
              <option>Neuquen</option>
              <option>La Pampa</option>
              <option>Mendoza</option>
              <option>San Luis</option>
              <option>Entre Rios</option>
              <option>Corrientes</option>
              <option>Misiones</option>
              <option>Chaco</option>
              <option>San Juan</option>
              <option>La Rioja</option>
              <option>Catamarca</option>
              <option>Tucuman</option>
              <option>Salta</option>
              <option>Jujuy</option>
              <option>Formosa</option>
              <option>Santiago del EStero</option>
            </select>
          </Form.Group>
          </Col>
          <Col><Form.Group controlId="register-tel" className="mb-1">
          <Form.Control type="tel" size="lg" placeholder="Tel" autoComplete="off" className="position-relative" required/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6}}>
          <Form.Group controlId="register-localidad" className="mb-1">
          <Form.Control type="text" size="lg" placeholder="Localidad" autoComplete="off" className="position-relative" required/>
          </Form.Group>
          </Col>
          <Col md={{ span: 6 }}>
          <Form.Group controlId="register-dni" className="mb-1">
          <Form.Control type="number" maxLength="8" size="lg" placeholder="DNI" autoComplete="on" className="position-relative" required/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6 }}>
          <Form.Group controlId="register-obrasocial" className="mb-1">
          <Form.Control type="text" size="lg" placeholder="Obra Social" autoComplete="off" className="position-relative" required/>
          </Form.Group>
          </Col>
          <Col md={{ span: 6 }}>
          <Form.Group controlId="register-borndate" className="mb-1">
          <Form.Control type="date" size="lg" placeholder="Fecha de Nacimiento" autoComplete="off" className="position-relative" required/>
          </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" size="lg" className="mb-3 w-50 mt-3">Registrarse</Button>
        <div className="d-grid mt-2">
          <p>
            ¿Ya tienes una cuenta? <a href="/login">Inicia Sesion</a>
          </p>
        </div>
        <p className="mt-5 text-muted">&copy; 2022-2023</p>
      </Form>
    </Container>
  );
}

export default App;
