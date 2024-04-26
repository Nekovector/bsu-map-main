import React, { useState, useEffect } from 'react';
import { Container, Row, Accordion, AccordionBody } from 'react-bootstrap';
import parse from 'html-react-parser';
import { DateOnlyString } from '../../../helpers/date-time';

import css from './scientist-info.module.scss';

export default function ScientistInfo({ currentScientist, setMark, activateTransition }) {
  const [birthDate, setBirthDate] = useState();
  const [deathDate, setDeathDate] = useState();
  const [memoryPlaces, setMemoryPlaces] = useState([]);

  useEffect(() => {
    setBirthDate(DateOnlyString(currentScientist.birthDate));
    setDeathDate(DateOnlyString(currentScientist.deathDate));
    setMemoryPlaces(currentScientist.memoryPlaces.sort((a, b) => {
      return a.ordinalNumber - b.ordinalNumber;
    }));
  }, [currentScientist]);

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
        <Accordion defaultActiveKey={0}>
          {memoryPlaces.map((mPlace, index) => (
            <div key={index}>
              <h3 
                onClick={() => {
                  setMark([mPlace.coordinates.latitude, mPlace.coordinates.longitude]);
                  activateTransition(true);
                }}
              >
                {mPlace.name}
              </h3>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>Подробнее...</Accordion.Header>
                <AccordionBody>
                  <div>
                    {parse(mPlace.description)}
                  </div>
                </AccordionBody>
              </Accordion.Item>
              <br/>
            </div>
          ))}
        </Accordion> 
      </Row>
    </Container>
  );
}