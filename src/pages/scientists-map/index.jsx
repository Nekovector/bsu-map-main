import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';

import ScientistSelector from '../../components/scientists-part/scientist-selector';
import ToggleMenu from '../../components/scientists-part/toggle-menu';
import ScientistInfo from '../../components/scientists-part/scientist-info';
import { ScientistsService } from '../../services/scientists.service';

import "../../custom-bootstrap-coloring.scss";
import css from './scientists-map.module.css';

export default function ScientistsMap() {
  const [scientists, setScientists] = useState([]);
  const [currentScientist, setCurrentScientist] = useState(null);
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [numberOfColumns, setNumberOfColumns] = useState(12);

  useEffect(() => {
    const getData = async () => {
      const data = await ScientistsService.getScientists();
      setScientists(data);
      if (data) {
        setCurrentScientist(data[0]);
      }

      console.log(data);
    };

    getData();
  }, []);

  const updateCurrentScientist = (scientistId) => {
    const scientist = scientists.find((sc) => sc.id === scientistId);
    setCurrentScientist(scientist);
    console.log(scientist);
  }

  const switchMenu = () => {
    if (menuIsOpened) {
      setMenuIsOpened(false);
      setNumberOfColumns(12);
    } else {
      setMenuIsOpened(true);
      setNumberOfColumns(8);
    }
  }

  const position = [53.893924, 27.547005]

  return (
    <Container fluid className={css.container}>
      <Row>
        <Col xl={numberOfColumns} className='px-0'>
          <MapContainer attributionControl={false} center={position} zoom={10} scrollWheelZoom={true} className={css.map}>
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />
            <ScientistSelector scientistsCollection={scientists} onChange={updateCurrentScientist} />
            <ToggleMenu onClick={switchMenu} />
            <MarkerClusterGroup>
              {currentScientist && currentScientist.memoryPlaces &&
                currentScientist.memoryPlaces.map(mPlace => (
                <Marker
                  key={mPlace.id}
                  position={[mPlace.coordinates.latitude, mPlace.coordinates.longitude]}
                >
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </Col>
        {menuIsOpened && currentScientist &&
          <Col xl={12 - numberOfColumns} className={css.infoCol}>
            <ScientistInfo currentScientist={currentScientist}/>
          </Col>
        }
      </Row>
    </Container>
  );
}