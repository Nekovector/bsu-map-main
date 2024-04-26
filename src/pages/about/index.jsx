import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import css from './about.module.css';

export default function About() {
  return (
    <Container fluid className={css.container}>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card>
            <Card.Header>Интерактивная карта становления БГУ</Card.Header>
            <Card.Body>
              <Card.Text>
              Интерактивная карта БГУ – это индексированная коллекция фотографий и нанесенных на карту мест, относящихся к истории Белорусского государственного университета,
              с момента его образования до текущих дней. Интерактивная карта БГУ разрабатывается как web-приложение, 
              а также как приложение для мобильных устройств, которое предоставляет пользователю не только картографическую информацию, 
              но также исторические фотографии и исторические факты о зданиях Белорусского государственного университета.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}