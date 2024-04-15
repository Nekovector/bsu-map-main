import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useMap } from 'react-leaflet';

import css from './toggle-menu.module.css';
import '../../../custom-bootstrap-coloring.scss';


export default function ToggleMenu({ onClick }) {
  const map = useMap();
  setTimeout(() => map.invalidateSize(true), 200);

  return (
    <Button variant="secondary" className={css.toggleButton} onClick={onClick}>More</Button>
  );
}

ToggleMenu.propTypes = {
  onChange: PropTypes.func
}
