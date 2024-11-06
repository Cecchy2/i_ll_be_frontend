import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="main">
      <div className="d-flex justify-content-center">
        <div className="loginCard border border-danger">
          <Container>
            <Row>
              <Col className="d-flex justify-content-center mt-5 ">
                <Form>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="">✉️ Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>💳 Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="outline-dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
