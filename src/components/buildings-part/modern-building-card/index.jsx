import React from "react";
import PropTypes from 'prop-types';
import { ListGroup, Card, Button } from 'react-bootstrap';

import css from "./modern-building-card.module.css";

export default function ModernBuildingCard({ building, setCurrentObject, setNumberOfColumns }) {
  return (
    <Card border="primary">
      <Card.Header as="h4">{building.name}</Card.Header>
      <Card.Body>
        <Card.Title>Подразделения:</Card.Title>
        <ListGroup variant="flush">
          {building.structuralObjects?.map(object => (
            <ListGroup.Item
              key={object.id}>
              <Card.Text className={css.listItemText}>
                {object.subdivision}
              </Card.Text>
              <Button onClick={() => { setCurrentObject(object); setNumberOfColumns(8); }}>Подробнее...</Button >
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

ModernBuildingCard.propTypes = {
  building: PropTypes.object,
  setCurrentObject: PropTypes.func,
  setNumberOfColumns: PropTypes.func
}

