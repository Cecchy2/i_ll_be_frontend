import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAmici } from "../redux/actions/amiciActions";
import { useNavigate } from "react-router-dom";

const AmiciPage = () => {
  const utente = useSelector((state) => state.utente.utente);
  const dispatch = useDispatch();
  const amici = useSelector((state) => state.amicizie.amici);
  const navigate = useNavigate();
  console.log(utente);
  console.log(amici);

  useEffect(() => {
    if (utente?.id) {
      dispatch(getAmici(utente.id));
    } else {
      console.error("Utente non trovato nello stato!");
    }
  }, [dispatch, utente]);

  return (
    <div className="main">
      <Container>
        <Row>
          {amici.map((amico) => (
            <Col key={amico.id}>
              <Card className="m-3 p-3 amiciCard text-white " bg="dark">
                <Card.Img variant="top" src={amico.immagine} className="amiciImage border border-warning" />
                <Card.Body>
                  <Card.Title className="m-0 fs-6">{amico.username}</Card.Title>
                  <Card.Title className="m-0 fs-6">{amico.nome}</Card.Title>
                  <Card.Title className="m-0 fs-6">{amico.cognome}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>{" "}
    </div>
  );
};

export default AmiciPage;
