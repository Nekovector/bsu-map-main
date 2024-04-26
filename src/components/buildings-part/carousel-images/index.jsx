import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { BuildingPhotosService } from '../../../services/building-photos.service';
import parse from 'html-react-parser';

import css from './carousel-images.module.css';

export default function CarouselImages({ buildingId, isModernBuilding }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async (id) => {
      const photos = await BuildingPhotosService.getPhotos(id);
      setPhotos(photos);
    };

    getPhotos(buildingId);
  }, [buildingId]);

  const currentAbsolutePhotoBasePath = isModernBuilding
    ? '/buildings_images/modern_buildings'
    : '/buildings_images/historical_buildings';

  return (
    <>
    {photos.length !== 0 &&
    <Carousel variant="dark">
      {photos.map((photo, i) => (
        <Carousel.Item key={i} className={css.caroucelItem}>
          <img
            className={css.carouselImage}
            src={`${currentAbsolutePhotoBasePath}/${photo.imagePath}`}
            alt=""
          />
          <Carousel.Caption className={css.carouselCaption}>
            <div>{parse(photo.description)}</div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    }
    </>
  );
}