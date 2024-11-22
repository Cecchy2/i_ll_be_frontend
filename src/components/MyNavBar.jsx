import { Button, Container, Form, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginSuccess, logout } from "../redux/actions/authActions";
import { getProfile } from "../redux/actions/utentiActions";

const MyNavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const utente = useSelector((state) => state.utente.utente);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      dispatch(loginSuccess({ accessToken: token, utenteId: userId }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && user?.utenteId) {
      dispatch(getProfile(user.utenteId));
    }
  }, [isAuthenticated, user, dispatch]);

  const handleLogout = () => {
    const confirmed = window.confirm("Sei sicuro di voler uscire?");
    if (confirmed) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <Container>
        <Navbar.Brand href="/">
          <Image src="/I'LLBE LOGO.webp" width={40} onClick={() => navigate("/")} className="border rounded logoNav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ms-auto">
          <div className="d-flex align-items-center">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Cerca amici o eventi" className="me-2 " aria-label="Search" />
              <Button variant="outline-info" type="submit" className="btn-search">
                <BsSearch className="mb-2" />
              </Button>
            </Form>

            {isAuthenticated ? (
              <NavDropdown
                title=<Image
                  src={utente?.immagine}
                  alt="avatar"
                  roundedCircle
                  width={35}
                  height={35}
                  style={{ objectFit: "cover" }}
                  className=" p-0"
                  id="basic-nav-dropdown"
                />
                align="end"
              >
                <NavDropdown.Item href="/profilo">Profilo</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Login" id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/registrazione">Registrati</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Info</NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
