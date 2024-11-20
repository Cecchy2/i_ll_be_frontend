import { useEffect } from "react";
import { getAllUtenti } from "../redux/actions/amiciActions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const AmiciPage = () => {
  const dispatch = useDispatch();
  const utenti = useSelector((state) => state.amicizie.utenti.content);
  console.log(utenti);

  useEffect(() => {
    dispatch(getAllUtenti());
  }, [dispatch]);
  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="d-flex">
            {utenti?.map((utente) => (
              <Card key={utente.id} className="m-3 p-3 amiciCard">
                <Card.Img variant="top" src={utente.immagine} className="amiciImage " />
                <Card.Body>
                  <Card.Title className="m-0 fs-6">{utente.username}</Card.Title>
                  <Card.Title className="m-0 fs-6">{utente.nome}</Card.Title>
                  <Card.Title className="m-0 fs-6">{utente.cognome}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default AmiciPage;
