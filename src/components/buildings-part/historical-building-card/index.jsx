import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button } from 'react-bootstrap';

export default function HistoricalBuildingCard({ building, setCurrentObject, setNumberOfColumns }) {
  return (
    <Card border="primary">
      <Card.Header as="h4">{building.name}</Card.Header>
      <Card.Body>
        <Button onClick={() => { setCurrentObject(building); setNumberOfColumns(8); }}>Исторические сведения...</Button >
      </Card.Body>
    </Card>
  );
}

HistoricalBuildingCard.propTypes = {
  building: PropTypes.object,
  setCurrentObject: PropTypes.func,
  setNumberOfColumns: PropTypes.func
};

