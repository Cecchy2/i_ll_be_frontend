import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    if (user.role === "USER") {
      navigate("/");
    } else if (user.role === "ADMIN") {
      navigate("/");
    }
  }

  return (
    <div className="main">
      <div className="d-flex justify-content-center">
        <div className="loginCard border border-danger">
          <Container>
            <Row>
              <Col className="d-flex justify-content-center mt-5 ">
                <Form onSubmit={handleSubmit}>
                  <h3>•Login•</h3>
                  <Form.Group className="mb-4" controlId="formGroupEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Inserisci l'email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-light border-0 rounded-3"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formGroupPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Inserisci la password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-light border-0 rounded-3"
                      required
                    />
                  </Form.Group>

                  <Button variant="outline-dark" type="submit">
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Login in corso...
                      </>
                    ) : (
                      "Accedi"
                    )}
                  </Button>
                  <div className="d-flex justify-content-center align-items-center  mt-4">
                    <p className="mt-3"> Non sei ancora registrato? </p>
                    <Link to="/registrazione"> &nbsp; Registrati </Link>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
