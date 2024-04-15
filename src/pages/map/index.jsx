import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';

import MapSelector from '../../components/buildings-part/map-selector';
import ModernBuildingCard from '../../components/buildings-part/modern-building-card';
import StructuralObjectInfo from '../../components/buildings-part/structural-object-info';
import HistoricalBuildingCard from '../../components/buildings-part/historical-building-card';
import HistoricalBuildingInfo from '../../components/buildings-part/historical-building-info';

import { BuildingsService } from '../../services/buildings.service';

import "../../custom-bootstrap-coloring.scss";
import css from './map.module.css';

export default function Map() {
  const [buildings, setBuildings] = useState([]);
  const [currentObject, setCurrentObject] = useState(null);
  const [numberOfColumns, setNumberOfColumns] = useState(12);
  const [currentMap, setCurrentMap] = useState('Modern');

  const isModernMap = (map) => {
    return map.toLocaleLowerCase() === 'modern';
  }

  useEffect(() => {
    const getData = async () => {
      let data;
      if (isModernMap(currentMap)) {
        data = await BuildingsService.getModernBuildings();
        setBuildings(data);
      }
      else {
        data = await BuildingsService.getHistoricalBuildings();
        setBuildings(data);
      }
      console.log({data});
    };

    getData();
  }, [currentMap]);

  const updateCurrentMap = (map) => {
    console.log('new map: ', map);
    setCurrentMap(map);
    setNumberOfColumns(12);
    setCurrentObject(null);
  }

  const position = [53.893924, 27.547005]

  return (
    <Container fluid className={css.container}>
      <Row>
        <Col xl={numberOfColumns} className='px-0'>
          <MapContainer attributionControl={false} center={position} zoom={10} scrollWheelZoom={true}  className={css.map}>
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />
            <MapSelector selectedMap={currentMap} onChange={updateCurrentMap} />
            <MarkerClusterGroup>
              {buildings.map(building => (
                <Marker
                  key={building.id}
                  position={[building.address.coordinates.latitude, building.address.coordinates.longitude]}
                  icon={new Icon({iconUrl: (`/drawable/buildings_markers/${building.type.markerPath}`)})}
                >
                <Popup>
                  {isModernMap(currentMap) &&
                    <ModernBuildingCard building={building} setCurrentObject={setCurrentObject} setNumberOfColumns={setNumberOfColumns} />
                  }
                  {!isModernMap(currentMap) &&
                    <HistoricalBuildingCard building={building} setCurrentObject={setCurrentObject} setNumberOfColumns={setNumberOfColumns} />
                  }
                </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </Col>
        {currentObject &&
        <Col xl={12-numberOfColumns} className={css.infoCol}>
          {isModernMap(currentMap) &&
            <StructuralObjectInfo currentObject={currentObject} setCurrentObject={setCurrentObject} setNumberOfColumns={setNumberOfColumns} />
          }
          {!isModernMap(currentMap) &&
            <HistoricalBuildingInfo currentObject={currentObject} setCurrentObject={setCurrentObject} setNumberOfColumns={setNumberOfColumns} />
          }
        </Col>}
      </Row>
    </Container>
  );
}
