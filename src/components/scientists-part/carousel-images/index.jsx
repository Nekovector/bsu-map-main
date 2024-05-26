import React, { useEffect, useState } from 'react';
import { Carousel, CarouselCaption } from 'react-bootstrap';
import { MemoryPhotosService } from '../../../services/memory-photos.service';

import css from './carousel-images.module.css';


export default function CarouselImages({ memoryPlaceId, popupRef }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async (id) => {
      const photos = await MemoryPhotosService.getPhotos(id);
      setPhotos(photos);
      // Обновление модального окна после загрузки фотографий
      setTimeout(() => {
        popupRef.current.update();
      }, 100);
    };

    getPhotos(memoryPlaceId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoryPlaceId]);

  const absolutePhotoBasePath = '/memoryPlaces_images';

  return (
    <>
      {photos.length !== 0 &&
        <Carousel interval={5000} indicators={false}>
          {photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <img
                className={css.carouselImage}
                src={`${absolutePhotoBasePath}/${photo.imagePath}`}
                alt={`${photo.ordinalNumber}`}
              />
              <CarouselCaption className={css.carouselCaption}>
                <div className={css.captionText}>{photo.description}</div>
              </CarouselCaption>
            </Carousel.Item>
          ))}
        </Carousel>
      }
    </>
  );
}