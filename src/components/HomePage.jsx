import { useState } from "react";
import { Button, Card, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomePage = () => {
  const utente = useSelector((state) => state.utente.utente);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
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
