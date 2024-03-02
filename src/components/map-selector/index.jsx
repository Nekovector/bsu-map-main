import React from "react";
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap'

import css from './map-selector.module.css';

export default function MapSelector({ selectedMap, onChange }){
  return (
    <FloatingLabel className={css.mapSelectorContainer} controlId="floatingSelect" label="Select type of map">
      <Form.Select aria-label="Floating label select example" onChange={e => onChange(e.target.value)}>
        <option value="Modern">Modern</option>
        <option value="Historical">Historical</option>
      </Form.Select>
    </FloatingLabel>
  )
}

MapSelector.propTypes = {
  selectedMap: PropTypes.string,
  onChange: PropTypes.func
}