import { Button, Card, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { addAmico, getAllUtenti, getAmici } from "../redux/actions/amiciActions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const utenti = useSelector((state) => state.amicizie.utenti.content);
  const amici = useSelector((state) => state.amicizie.amici);
  const utenteProfilo = useSelector((state) => state.utente.utente);
  const error = useSelector((state) => state.amicizie.error);
  const [show, setShow] = useState(false);
  const [utenteSelezionato, setUtenteSelezionato] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
    if (utenteProfilo.id) {
      dispatch(getAllUtenti());
      dispatch(getAmici(utenteProfilo.id));
    }
  }, [dispatch, utenteProfilo.id]);

  useEffect(() => {
    console.log("Utenti:", utenti);
  }, [utenti]);

  const isFriend = (utenteId) => amici.some((amico) => amico.id === utenteId);

  return (
    <div className="main">
      <Container>
        <Row>
          {isAuthenticated ? (
            <div>
              <Col className="d-flex">
                {utenti
                  ?.filter((utente) => utente.id !== utenteProfilo.id)
                  .map((utente) => (
                    <div key={utente.id}>
                      <Card className="m-3 p-3 amiciCard text-white" bg="dark" onClick={() => handleShow(utente)}>
                        <div className="d-flex align-items-center">
                          <Card.Img variant="top" src={utente.immagine} className="amiciImage border border-warning" />
                          <span className={`status-indicator ${utente.online ? "bg-success" : "bg-secondary"}`}></span>
                        </div>
                        <Card.Body>
                          <Card.Title className="m-0 fs-6">{utente.username}</Card.Title>
                          <Card.Title className="m-0 fs-6">{utente.nome}</Card.Title>
                          <Card.Title className="m-0 fs-6">{utente.cognome}</Card.Title>
                          {isFriend(utente.id) && <div className="text-success">Amico</div>}
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </Col>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          ) : (
            <Col>
              <div className="d-flex justify-content-center ">
                <Image src="/I'LLBE LOGO.webp" alt="logo" className="mt-5" width={350} roundedCircle />
              </div>
              <div className="d-flex justify-content-center">
                <h1 className="mt-3 text-white">Benvenuto su I'LLBE</h1>
              </div>
              <div className="d-flex justify-content-center">
                <p className="fs-4 text-white">Registrati o fai il login per accedere </p>{" "}
              </div>
            </Col>
          )}
        </Row>
      </Container>

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
  );
};

export default HomePage;
