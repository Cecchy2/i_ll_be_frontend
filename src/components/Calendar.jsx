import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";

const Calendar = () => {
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
    console.log(`Giorni nel mese: ${daysInMonth}`);
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(year, month, i).getDay();
      daysArray.push({ day: i, dayName: dayNames[dayOfWeek] });
    }

    setDays(daysArray);
  }, [month, year]);

  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="calendar">
      <Container>
        <Row className="mt-4">
          <Col className="m-4 mb-1 mt-5 pt-4 d-flex align-items-center">
            <MdOutlineArrowCircleLeft className="text-white" size={30} onClick={handlePreviousMonth} />
            <h1 className="text-white display-4 mx-2">{monthNames[month]}</h1>
            <MdOutlineArrowCircleRight className="text-white" size={30} onClick={handleNextMonth} />
          </Col>
          <Col className="m-4 mb-1 mt-5 pt-4 d-flex align-items-center">
            <MdOutlineArrowCircleLeft className="text-white" size={20} onClick={() => setYear(year - 1)} />
            <h2 className="text-white mt-3 mx-2">{year}</h2>
            <MdOutlineArrowCircleRight className="text-white" size={20} onClick={() => setYear(year + 1)} />
          </Col>
        </Row>
        <Row className="mt-5 mx-1">
          {days.map((day, index) => (
            <Col
              key={index}
              xs="auto"
              className="text-center text-white rounded border border-white p-2 m-1 casellaGiorno"
            >
              <p className="m-0 text-info">{day.dayName}</p>
              <h4>{day.day}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
