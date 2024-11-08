import { Col, Container, Row } from "react-bootstrap";

const ChatPage = () => {
  return (
    <div className="main">
      <h1 className="text-center mt-3 mb-5 text-white">•ChatPage•</h1>
      <Container>
        <Row>
          <Col className="chatLines"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatPage;
