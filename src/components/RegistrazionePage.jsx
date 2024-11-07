import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { register } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegistrazionePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    nome: "",
    cognome: "",
  });

  const [immagine, setImmagine] = useState(null);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleImmagineChange = (e) => {
    setImmagine(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await dispatch(register(formValues, immagine));

    if (result.success) {
      alert("Registrazione avvenuta con successo");
      navigate(`/login`);
    } else {
      alert(`Registrazione fallita: ${result.message || "Errore sconosciuto"}`);
    }
    setLoading(false);
  };

  return (
    <div className="main">
      <div className="d-flex justify-content-center">
        <div className="registerCard border border-danger">
          <Container>
            <Row>
              <Col className="d-flex justify-content-center mt-3 ">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formNome" className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      name="nome"
                      value={formValues.nome}
                      onChange={handleChange}
                      placeholder="Inserisci il tuo nome"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formCognome" className="mb-3">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control
                      type="text"
                      name="cognome"
                      value={formValues.cognome}
                      onChange={handleChange}
                      placeholder="Inserisci il tuo cognome"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formValues.username}
                      onChange={handleChange}
                      placeholder="Inserisci il tuo username"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Inserisci la tua email"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="Inserisci la tua password"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formAvatar" className="mb-3">
                    <Form.Label>Immagine Profilo (Opzionale)</Form.Label>
                    <Form.Control type="file" name="immagine" onChange={handleImmagineChange} accept="image/*" />
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="px-5" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Registrazione in corso...
                        </>
                      ) : (
                        "Registrati"
                      )}
                    </Button>
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

export default RegistrazionePage;
