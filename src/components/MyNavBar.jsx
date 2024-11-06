import { Button, Container, Form, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/public/I'LLBE LOGO.webp"
            width={40}
            onClick={() => navigate("/")}
            className="border rounded logoNav"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ms-auto">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Cerca amici o eventi" className="me-2" aria-label="Search" />
            <Button variant="outline-secondary" type="submit">
              Cerca
            </Button>
          </Form>

          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Registrati</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Info</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
