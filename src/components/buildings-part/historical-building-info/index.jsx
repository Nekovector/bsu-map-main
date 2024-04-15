import React from "react";
import { Container, Row, Col, CloseButton } from 'react-bootstrap';
import CarouselImages from "../carousel-images";
import parse from 'html-react-parser';

import css from "./historical-building-info.module.css";

export default function HistoricalBuildingInfo({ currentObject, setCurrentObject, setNumberOfColumns }) {
  return (
    <Container fluid className={css.objectInfo}>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <h2 className={css.objectTitle}>{currentObject.name}</h2>
        </Col>
        <Col xs={1}>
          <CloseButton onClick={() => { setCurrentObject(null); setNumberOfColumns(12) }} />
        </Col>
      </Row>
      {/* row with photos */}
      <Row>
        <CarouselImages buildingId={currentObject.id} isModernBuilding={false} />
      </Row>
      <Row>
        {currentObject.address?.description && 
        <div className={css.expandedContainer}>{ parse(currentObject.address.description) }</div> }
      </Row>
    </Container>
  );
}