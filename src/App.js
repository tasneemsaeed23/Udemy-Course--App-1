import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { person } from "./data";
import DateCount from "./components/DateCount";
import DateList from "./components/DateList";
import DataButton from "./components/DataButton";
function App() {
  const [PersonData, setPersonData] = useState(person);
  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  return (
    <div className="fontAlmarai">
      <Container className="py-5">
        <DateCount person={PersonData} />
        <DateList person={PersonData} />
        <DataButton DeleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
