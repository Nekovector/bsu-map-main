import React from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap'

import css from './scientist-selector.module.css';

export default function ScientistSelector({ scientistsCollection, onChange }){
  return (
    <FloatingLabel className={css.scientistSelectorContainer} controlId="floatingSelect" label="Select scientist">
      <Form.Select aria-label="Floating label select example" onChange={e => onChange(e.target.value)}>
        {scientistsCollection &&
          scientistsCollection.map((sc) => 
          <option
            key={sc.id}
            value={sc}>
            {sc.firstName + ' ' + sc.lastName}
          </option>)
        }
      </Form.Select>
    </FloatingLabel>
  );
}

ScientistSelector.propTypes = {
  scientistsCollection: PropTypes.array,
  onChange: PropTypes.func
}