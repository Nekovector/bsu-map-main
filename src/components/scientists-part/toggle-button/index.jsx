import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useMap } from 'react-leaflet';

import css from './toggle-button.module.css';
import '../../../custom-bootstrap-coloring.scss';

export default function ToggleButton({ onClick }) {
  const [buttonName, setButtonName] = useState('Показать');
  const map = useMap();
  setTimeout(() => map.invalidateSize(true), 200);

  return (
    <Button
      style={{backgroundColor: 'primary'}}
      className={css.toggleButton}
      onClick={() => {
        onClick();
        if (buttonName === 'Показать') {
          setButtonName('Скрыть');
        } else {
          setButtonName('Показать');
        }
      }}
    >{buttonName}
    </Button>
  );
}

ToggleButton.propTypes = {
  onChange: PropTypes.func
};
