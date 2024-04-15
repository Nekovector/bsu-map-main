import React from "react";
import { Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import { DateOnlyString } from "../../../helpers/date-time";

import css from "./scientist-info.module.css";

export default function ScientistInfo({ currentScientist }) {
  //Сортировка по порядковому номеру
  const memoryPlaces = currentScientist.memoryPlaces.sort((a, b) => {
    return a.ordinalNumber - b.ordinalNumber;
  });

  const birthDate = DateOnlyString(currentScientist.birthDate);
  const deathDate = DateOnlyString(currentScientist.deathDate);

  return (
    <Container fluid className={css.scientistInfo}>
      <Row>
        <h2>{`${currentScientist.firstName} ${currentScientist.patronymic} ${currentScientist.lastName}`}</h2> 
        <p>
          {`Дата рождения: ${birthDate}`}<br/>
          {`Дата смерти: ${deathDate}`}
        </p>
      </Row>
      <Row>
        <h2>Биография</h2> 
        <p>{currentScientist.biography}</p>
      </Row>
      <Row>
        <h2>Памятные места</h2> 
        {memoryPlaces.map((mPlace =>
          <div key={mPlace.ordinalNumber}>
            <h3>{mPlace.name}</h3>
            {parse(mPlace.description)}
          </div>
        ))}
      </Row>
    </Container>
  );
}