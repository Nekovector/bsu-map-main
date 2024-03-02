import React from "react";
import { Container, Row, Col, CloseButton } from 'react-bootstrap';
import CarouselImages from "../carousel-images";
import parse from 'html-react-parser';

import css from "./structural-object-info.module.css";

export default function StructuralObjectInfo({ currentObject, setCurrentObject, setNumberOfColumns }) {
  return (
    <Container className={css.objectInfo}>
      <Row>
        <Col xs={1}>
          <a href={currentObject.website}>
            <img className={css.structuralObjectLogo} src={`/drawable/structural_objects_logos/${currentObject.icon.logoPath}`} alt="Logo" />
          </a>
        </Col>
        <Col xs={10}>
          <h2 className={css.objectTitle}>{currentObject.subdivision}</h2>
        </Col>
        <Col xs={1}>
          <CloseButton onClick={() => { setCurrentObject(null); setNumberOfColumns(12) }} />
        </Col>
      </Row>
      {/* row with photos */}
      <Row>
        <CarouselImages buildingId={currentObject.buildingId} isModernBuilding={true} />
      </Row>
      <Row>
        {currentObject.description &&
          <div className={css.expandedContainer}>{parse(currentObject.description)}</div>}
      </Row>
    </Container>
  )
}