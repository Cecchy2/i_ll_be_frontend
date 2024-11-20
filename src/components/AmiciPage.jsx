import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAmici } from "../redux/actions/amiciActions";

const AmiciPage = () => {
  const utente = useSelector((state) => state.utente.utente);
  const dispatch = useDispatch();
  const amici = useSelector((state) => state.amicizie.amici);
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
          <Col></Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default AmiciPage;
