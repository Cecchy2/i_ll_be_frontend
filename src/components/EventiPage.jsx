import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { TiPlusOutline } from "react-icons/ti";
import { creaEvento, getEventi } from "../redux/actions/eventiActions";
import { useDispatch, useSelector } from "react-redux";

const EventiPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const eventi = useSelector((state) => state.eventi.eventi);

  console.log(eventi);

  const [newEvento, setNewEvento] = useState({
    titolo: "",
    dataEvento: "",
    dataFineEvento: "",
    luogo: "",
    descrizione: "",
    categoria: "",
    modo: "PUBBLICO",
  });

  useEffect(() => {
    dispatch(getEventi());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(creaEvento(newEvento));
    handleClose();
  };

  return (
    <div className="main">
      <Container>
        <Row>
          <div>
            <h1 className="text-center mt-3 mb-5 text-white">• EventiPage •</h1>
          </div>
        </Row>
        <Row>
          {eventi?.content?.length > 0 ? (
            eventi.content.map((evento) => (
              <Col key={evento.id}>
                <Card className="m-3 p-3 eventiCard text-white" bg="dark">
                  <Card.Body>
                    <Card.Title className="m-0 text-center">{evento.titolo}</Card.Title>
                    <Card.Text className="m-0 text-center">{evento.dataEvento}</Card.Text>
                    <Card.Text className="m-0">{evento.descrizione}</Card.Text>
                    <Card.Text className="m-0">Luogo: {evento.luogo}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-white">Nessun evento disponibile</div>
          )}
        </Row>
        <Row>
          <Col className="mt-5">
            <div className="d-flex creaEventoButton" onClick={handleShow}>
              <TiPlusOutline className="text-white fs-1" />
              <h2 className="text-white ms-1">Crea un nuovo evento</h2>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Crea un Evento</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="Titolo">
                    <Form.Label>Titolo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Titolo"
                      value={newEvento.titolo}
                      onChange={(e) => setNewEvento({ ...newEvento, titolo: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Date inizio evento">
                    <Form.Label>Data inizio evento</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Data inizio evento"
                      value={newEvento.dataEvento}
                      onChange={(e) => setNewEvento({ ...newEvento, dataEvento: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="data fine evento">
                    <Form.Label>Data fine evento</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Data fine evento"
                      value={newEvento.dataFineEvento}
                      onChange={(e) => setNewEvento({ ...newEvento, dataFineEvento: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Luogo">
                    <Form.Label>Luogo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Luogo"
                      value={newEvento.luogo}
                      onChange={(e) => setNewEvento({ ...newEvento, luogo: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Descrizione evento">
                    <Form.Label>Descrizione evento</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={newEvento.descrizione}
                      onChange={(e) => setNewEvento({ ...newEvento, descrizione: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Categoria">
                    <Form.Label>Descrivi una categoria</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Categoria"
                      value={newEvento.categoria}
                      onChange={(e) => setNewEvento({ ...newEvento, categoria: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Select
                    aria-label="Modo"
                    value={newEvento.modo}
                    onChange={(e) => setNewEvento({ ...newEvento, modo: e.target.value })}
                  >
                    <option>Scegli il modo</option>
                    <option value="PRIVATO">Privato</option>
                    <option value="PUBBLICO">Pubblico</option>
                  </Form.Select>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventiPage;
