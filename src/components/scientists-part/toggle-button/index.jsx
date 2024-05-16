import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

import css from './toggle-button.module.css';
import '../../../custom-bootstrap-coloring.scss';

export default function ToggleButton({ onClick, menuIsOpened }) {
  const { t } = useTranslation();
  const map = useMap();
  setTimeout(() => map.invalidateSize(true), 200);

  return (
    <Button
      style={{ backgroundColor: 'primary' }}
      className={css.toggleButton}
      onClick={() => {
        onClick();
      }}
    >
      {menuIsOpened ? t('scientistsPage.button.close') : t('scientistsPage.button.open')}
    </Button>
  );
}

ToggleButton.propTypes = {
  onChange: PropTypes.func
};
