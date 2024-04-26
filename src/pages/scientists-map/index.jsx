import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';

import ScientistSelector from '../../components/scientists-part/scientist-selector';
import ToggleButton from '../../components/scientists-part/toggle-button';
import ScientistInfo from '../../components/scientists-part/scientist-info';
import MemoryPlaceCard from '../../components/scientists-part/memory-place-card';

import { ScientistsService } from '../../services/scientists.service';

import '../../custom-bootstrap-coloring.scss';
import css from './scientists-map.module.css';

const MarkTransition = ( {coords, ready, setReady} ) => {
  const map = useMap();
  useEffect(() => {
    if (ready) {
      map.setView(coords, 15);
      setReady(false);
    }
  }, [coords, ready, setReady, map]);

  return null;
};

export default function ScientistsMap() {
  const position = [53.893924, 27.547005];
  const [scientists, setScientists] = useState([]);
  const [currentScientist, setCurrentScientist] = useState(null);
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [numberOfColumns, setNumberOfColumns] = useState(12);
  const [currentMarkCoords, setCurrentMarkCoords] = useState([]);
  const [readyToTransition, setReadyToTransition] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const data = await ScientistsService.getScientists();
      setScientists(data);
      if (data) {
        setCurrentScientist(data[0]);
      }
    };

    getData();
  }, []);

  const updateCurrentScientist = (scientistId) => {
    const scientist = scientists.find((sc) => sc.id === scientistId);
    setCurrentScientist(scientist);
  };

  const switchMenu = () => {
    if (menuIsOpened) {
      setMenuIsOpened(false);
      setNumberOfColumns(12);
    } else {
      setMenuIsOpened(true);
      setNumberOfColumns(8);
    }
  };

  return (
    <Container fluid className={css.container}>
      <Row>
        <Col xl={numberOfColumns} className="px-0">
          <MapContainer attributionControl={false} center={position} zoom={10} scrollWheelZoom={true} className={css.map}>
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />
            <ScientistSelector scientistsCollection={scientists} onChange={updateCurrentScientist} />
            <ToggleButton onClick={switchMenu} />
            <MarkTransition coords={currentMarkCoords} ready={readyToTransition} setReady={setReadyToTransition} />
            <MarkerClusterGroup>
              {currentScientist && currentScientist.memoryPlaces &&
                currentScientist.memoryPlaces.map(mPlace => (
                <Marker
                  key={mPlace.id}
                  position={[mPlace.coordinates.latitude, mPlace.coordinates.longitude]}
                >
                <Popup ref={popupRef}>
                  <MemoryPlaceCard memoryPlace={mPlace} popupRef={popupRef} />
                </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </Col>
        {menuIsOpened && currentScientist &&
          <Col xl={12 - numberOfColumns} className={css.infoCol}>
            <ScientistInfo
              currentScientist={currentScientist} 
              setMark={setCurrentMarkCoords}
              activateTransition={setReadyToTransition}
            />
          </Col>
        }
      </Row>
    </Container>
  );
}