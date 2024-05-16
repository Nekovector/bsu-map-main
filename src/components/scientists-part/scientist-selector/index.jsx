import React from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';

import css from './scientist-selector.module.css';
import { useTranslation } from 'react-i18next';

export default function ScientistSelector({ scientistsCollection, onChange }) {
  const { t } = useTranslation();

  return (
    <FloatingLabel className={css.scientistSelectorContainer} controlId="floatingSelect" label={t('scientistsPage.selector')}>
      <Form.Select aria-label="Floating label select example" onChange={e => onChange(Number(e.target.value))}>
        {scientistsCollection &&
          scientistsCollection.map((sc) =>
            <option key={sc.id} value={sc.id}>
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
};