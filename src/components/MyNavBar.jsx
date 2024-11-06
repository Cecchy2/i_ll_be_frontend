import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            {/* <Form className="w-75 m-auto mt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Cerca per nome o email " />
              </Form.Group>
              <Button variant="outline-info" type="submit">
                Cerca
              </Button>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
