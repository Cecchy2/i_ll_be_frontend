import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const monthNames = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  const dayNames = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  useEffect(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(`Giorni nel mese: ${daysInMonth}`); // Debug: stampa il numero di giorni nel mese
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(year, month, i).getDay();
      daysArray.push({ day: i, dayName: dayNames[dayOfWeek] });
    }

    setDays(daysArray);
  }, [month, year]);

  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="m-4 mb-5">
            <h1 className="text-white">{monthNames[month]}</h1>
          </Col>
          <Col className="m-4 mb-5">
            <h1 className="text-white">{year}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {days.map((day, index) => (
            <Col
              key={index}
              xs="auto"
              className="text-center text-white rounded border border-white p-2 m-1 casellaGiorno"
            >
              <p className="m-0">{day.dayName}</p>
              <h4>{day.day}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
