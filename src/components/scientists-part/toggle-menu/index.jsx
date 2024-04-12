import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import css from './toggle-menu.module.css';
import '../../../custom-bootstrap-coloring.scss';

export default function ToggleMenu({ onClick }) {
  return (
    <Button variant="secondary" className={css.toggleButton} onClick={onClick}>More</Button>
  );
}

ToggleMenu.propTypes = {
  onChange: PropTypes.func
}
