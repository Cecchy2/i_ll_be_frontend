import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { addAmico, getAllUtenti } from "../redux/actions/amiciActions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const utenti = useSelector((state) => state.amicizie.utenti.content);
  const utenteProfilo = useSelector((state) => state.utente.utente);
  const error = useSelector((state) => state.amicizie.error); // Recupera lo stato dell'errore
  const [show, setShow] = useState(false);
  const [utenteSelezionato, setUtenteSelezionato] = useState(null);

  const handleClose = () => {
    setShow(false);
    setUtenteSelezionato(null);
  };

  const handleShow = (utente) => {
    setUtenteSelezionato(utente);
    setShow(true);
  };

  const handleAddAmico = () => {
    if (utenteSelezionato) {
      dispatch(addAmico(utenteProfilo.id, utenteSelezionato.id));
      handleClose();
    }
  };

  useEffect(() => {
    dispatch(getAllUtenti());
  }, [dispatch]);

  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="d-flex">
            {utenti
              ?.filter((utente) => utente.id !== utenteProfilo.id)
              .map((utente) => (
                <div key={utente.id}>
                  <Card className="m-3 p-3 amiciCard text-white " bg="dark" onClick={() => handleShow(utente)}>
                    <Card.Img variant="top" src={utente.immagine} className="amiciImage border border-warning" />
                    <Card.Body>
                      <Card.Title className="m-0 fs-6">{utente.username}</Card.Title>
                      <Card.Title className="m-0 fs-6">{utente.nome}</Card.Title>
                      <Card.Title className="m-0 fs-6">{utente.cognome}</Card.Title>
                    </Card.Body>
                  </Card>
                  <Modal show={show} onHide={handleClose} contentClassName="bg-dark text-light" size="sm">
                    <Modal.Body>
                      <Button variant="warning" onClick={handleAddAmico}>
                        Aggiungi ad amici
                      </Button>
                      <Button variant="secondary" onClick={handleClose} className="ms-4">
                        Chiudi
                      </Button>
                    </Modal.Body>
                  </Modal>
                </div>
              ))}
          </Col>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
