import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllUtenti } from "../redux/actions/amiciActions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const utenti = useSelector((state) => state.amicizie.utenti.content);
  console.log(utenti);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAllUtenti());
  }, [dispatch]);
  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="d-flex">
            {utenti?.map((utente) => (
              <Card key={utente.id} className="m-3 p-3 amiciCard text-white " bg="dark" onClick={handleShow}>
                <Card.Img variant="top" src={utente.immagine} className="amiciImage border border-warning" />
                <Card.Body>
                  <Card.Title className="m-0 fs-6">{utente.username}</Card.Title>
                  <Card.Title className="m-0 fs-6">{utente.nome}</Card.Title>
                  <Card.Title className="m-0 fs-6">{utente.cognome}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Modal show={show} onHide={handleClose} contentClassName="bg-dark text-light" size="sm">
            <Modal.Body>
              <Button
                variant="warning
              "
                onClick={handleClose}
              >
                Aggiungi ad amici
              </Button>
              <Button variant="secondary" onClick={handleClose} className="ms-4">
                Chiudi
              </Button>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
