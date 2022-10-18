import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white  d-flex flex-row justify-content-center" expand="lg">
      <Container>
        <Nav className="me-auto">
        <a className="navbar-brand" href="/home">
            <img src="data:image/jpeg;base64,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" alt="LOGO" height="50"></img>
          </a>
          
          <Nav.Link className="fs-3" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="fs-3" to="/market" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link className="fs-3" to="/login" as={NavLink}>
            Login
          </Nav.Link>
          <Nav.Link className="fs-3" to="/user" as={NavLink}>
            Usuario
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}
