import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Form.Select aria-label="Floating label select example" onChange={e => changeLanguage(e.target.value)}>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </Form.Select>
  );
}