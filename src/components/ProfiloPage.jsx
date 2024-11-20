import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/utentiActions";
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { uploadImmagineCopertina } from "../redux/actions/imagesUploadActions";
const ProfiloPage = () => {
  const utente = useSelector((state) => state.utente.utente);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModalCopertina, setShowModalCopertina] = useState(false);
  const handleCloseModalCopertina = () => setShowModalCopertina(false);
  const handleShowModalCopertina = () => setShowModalCopertina(true);
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

  const handleImmagineCopertinaChange = async (e) => {
    const immagineCopertina = e?.target?.files?.[0];
    if (!immagineCopertina) {
      setError("Nessuna immagine selezionata.");
      return;
    }

    try {
      const result = await dispatch(uploadImmagineCopertina(immagineCopertina));
      if (result.success) {
        setSuccess("Immagine copertina aggiornata con successo!");
        setError(null);
      } else {
        throw new Error(result.message || "Errore durante l'aggiornamento dell'immagine.");
      }
    } catch (error) {
      console.error(error);
      setError("Errore durante il caricamento dell'immagine.");
    }
  };
  return (
    <div className="main">
      <Image
        src={
          utente.immagineCopertina
            ? utente.immagineCopertina
            : "https://images.unsplash.com/photo-1499343162160-cd1441923dd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="immagine copertina"
        className="immagineCopertina"
        onClick={handleShowModalCopertina}
      />
      <Modal show={showModalCopertina} onHide={handleCloseModalCopertina} contentClassName="bg-dark text-light">
        <Modal.Header closeButton>
          <Modal.Title>Cambia Immagine Copertina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Immagine Copertina</Form.Label>
          <Form.Control
            type="file"
            name="immagineCopertina"
            onChange={handleImmagineCopertinaChange}
            accept="image/*"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalCopertina}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setLoading(true);
              handleImmagineCopertinaChange();
              setLoading(false);
              handleCloseModalCopertina();
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Salvataggio...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

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

export default ProfiloPage;
