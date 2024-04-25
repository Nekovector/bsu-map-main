import React from "react";
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import CarouselImages from "../carousel-images";

import css from './memory-place-card.module.css'

export default function MemoryPlaceCard({ memoryPlace }) {
  return (
    <Card border="primary" className={css.card}>
      <Card.Header as="h4">{memoryPlace.name}</Card.Header>
      <Card.Body className={css.cardBody}>
        <CarouselImages memoryPlaceId={memoryPlace.id} />
      </Card.Body>
    </Card>
  );
}

MemoryPlaceCard.propTypes = {
  memoryPlace: PropTypes.object
}