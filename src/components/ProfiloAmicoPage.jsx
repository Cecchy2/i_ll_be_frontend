import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAmico } from "../redux/actions/amiciActions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const ProfiloAmicoPage = () => {
  const { amicoId } = useParams();
  const dispatch = useDispatch();
  const amico = useSelector((state) => state.amicizie.amico);
  console.log(amico);

  useEffect(() => {
    dispatch(getAmico(amicoId));
  }, [dispatch, amicoId]);

  return (
    <div className="main">
      <Image
        src={
          amico?.immagineCopertina
            ? amico?.immagineCopertina
            : "https://images.unsplash.com/photo-1499343162160-cd1441923dd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="immagine copertina"
        className="immagineCopertina"
      />

      <Container>
        <Row>
          <Col>
            <h1 className="text-white mt-5 ms-5 display-4">
              {amico?.nome} {amico?.cognome}
            </h1>
            <h4 className="text-white ms-5">Username : {amico?.username}</h4>
          </Col>
          <Col>
            <Image
              src={amico?.immagine}
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

export default ProfiloAmicoPage;
