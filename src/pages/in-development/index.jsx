import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import css from "./in-development.module.css";

export default function InDevelopment() {
  return (
    <Container fluid className={css.container}>
      <Row>
        <Col>
          <p>Данная страница пока находится в разработкe.</p>
        </Col>
      </Row>
    </Container>
  )
}