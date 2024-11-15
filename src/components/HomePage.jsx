import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomePage = () => {
  const utente = useSelector((state) => state.utente.utente);

  return (
    <div className="main">
      <Image
        src="https://images.unsplash.com/photo-1728327511297-948650da8ed9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="immagine copertina"
        className="immagineCopertina"
      />
      <Container>
        <Row>
          <Col>
            <h1 className="text-white mt-5 ms-5 display-4">
              {utente.nome} {utente.cognome}
            </h1>
            <h4 className="text-white ms-5">Username : {utente.username}</h4>
            <Button variant="outline-light" className="ms-5">
              Modifica Profilo
            </Button>
          </Col>
          <Col>
            <Image src={utente.immagine} roundedCircle width={200} className="mt-5 ms-5" />
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
