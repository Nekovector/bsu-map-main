import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { ScientistsService } from '../../../services/scientists.service';

import css from './create-scientist-form.module.css';

export default function CreateScientistForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [biography, setBiography] = useState('');
  const [birthDate, setBirthDate] = useState('1900-01-01');
  const [deathDate, setDeathDate] = useState('');

  const navigate = useNavigate();

  const addScientist = async (event) => {
    event.preventDefault();
    const scientist = {
      firstName,
      lastName,
      patronymic,
      biography,
      birthDate,
      deathDate
    };

    await ScientistsService.createScientist(scientist);
    navigate(-1);
  };

  return (
    <Form className={css.formStyle} onSubmit={addScientist}>
      <Form.Group>
        <Form.Label>Фамилия:</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Имя:</Form.Label>
        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Отчество:</Form.Label>
        <Form.Control type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Биография:</Form.Label>
        <Form.Control as="textarea" rows={6} style={{ resize: 'none' }}
          value={biography} onChange={(e) => setBiography(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Дата рождения:</Form.Label>
        <Form.Control type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} min="1900-01-01" required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Дата смерти:</Form.Label>
        <Form.Control type="date" value={deathDate} onChange={(e) => setDeathDate(e.target.value)} min="1900-01-01" />
      </Form.Group>
      <br />
      <Button type="submit" style={{ width: '100%' }}>Добавить ученого</Button>
    </Form>
  );
}