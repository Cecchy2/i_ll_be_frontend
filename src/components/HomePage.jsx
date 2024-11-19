import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/utentiActions";
import { AiTwotoneCloseSquare } from "react-icons/ai";

const HomePage = () => {
  const utente = useSelector((state) => state.utente.utente);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(null);

  const [formValues, setFormValues] = useState({
    username: utente?.username || "",
    email: utente?.email || "",
    password: "",
    nome: utente?.nome || "",
    cognome: utente?.cognome || "",
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormValues({
      username: utente?.username || "",
      email: utente?.email || "",
      password: "",
      nome: utente?.nome || "",
      cognome: utente?.cognome || "",
    });
  }, [utente]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await dispatch(updateProfile(formValues));

    if (result.success) {
      setSuccess("Profilo aggiornato con successo!");
      handleClose();
    } else {
      setError(result.message || "Errore sconosciuto durante la modifica.");
    }
    setLoading(false);
  };

  return (
    <div className="main">
      <Image src={utente.immagineCopertina} alt="immagine copertina" className="immagineCopertina" />

      <Container>
        <Row>
          <Col>
            <h1 className="text-white mt-5 ms-5 display-4">
              {utente.nome} {utente.cognome}
            </h1>
            <h4 className="text-white ms-5">Username : {utente.username}</h4>
            <Button variant="outline-light" className="ms-5" onClick={handleShow}>
              Modifica Profilo
            </Button>
            {success && (
              <p className="text-success mt-3 ms-5">
                {success} <AiTwotoneCloseSquare onClick={() => setSuccess(null)} />
              </p>
            )}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modifica Profilo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formNome" className="mb-3">
                    <Form.Label className="m-0">Nome</Form.Label>
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
                    <Form.Label className="m-0">Cognome</Form.Label>
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
                    <Form.Label className="m-0">Username</Form.Label>
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
                    <Form.Label className="m-0">Email</Form.Label>
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
                    <Form.Label className="m-0">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="Inserisci la tua password"
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button variant="outline-dark" type="submit" className="px-5 mb-3" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Modifica in corso...
                        </>
                      ) : (
                        "Modifica"
                      )}
                    </Button>
                    <Button variant="outline-dark" className="px-5 mb-3 ms-1" onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                  {error && <p className="text-danger mt-3">{error}</p>}
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
          <Col>
            <Image
              src={utente.immagine}
              roundedCircle
              width={200}
              height={200}
              className="mt-4 ms-5 object-fit-cover"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Card Title 🏝️</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
