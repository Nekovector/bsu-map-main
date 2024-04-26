import React from "react";
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import CarouselImages from "../carousel-images";

export default function MemoryPlaceCard({ memoryPlace, popupRef }) {
  return (
    <Card border="primary">
      <Card.Header as="h4">{memoryPlace.name}</Card.Header>
      <Card.Body>
        <CarouselImages memoryPlaceId={memoryPlace.id} popupRef={popupRef} />
      </Card.Body>
    </Card>
  );
}

MemoryPlaceCard.propTypes = {
  memoryPlace: PropTypes.object
}