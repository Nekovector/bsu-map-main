import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { ScientistsService } from '../../services/scientists.service';

import css from './editor.module.css';

export default function Editor() {
  const [scientists, setScientists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await ScientistsService.getScientistsNames();
      setScientists(data);
      console.log(data);
    };

    getData();
  }, []);

  const onDelete = (scientist) => {
    ScientistsService.deleteScientist(scientist.id)
      .then(() => {
        setScientists(scientists.filter((sc) => sc.id !== scientist.id));
      });
  };


  return (
    <>
      <h2 className={css.header}>Список ученых</h2>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>ФИО</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {scientists.map((scientist, index) =>
            <tr key={index}>
              <td>{scientist.id}</td>
              <td>{`${scientist.lastName} ${scientist.firstName} ${scientist.patronymic}`}</td>
              <td>
                <Button
                  variant="warning"
                  style={{ marginRight: '10px' }}
                >
                  Редактировать
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onDelete(scientist)}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Link to="create-scientist">
        <Button variant="success">
          Добавить ученого
        </Button>
      </Link>
    </>
  );
}
