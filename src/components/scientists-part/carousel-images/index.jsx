import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { MemoryPhotosService } from '../../../services/memory-photos.service';

import css from './carousel-images.module.css';


export default function CarouselImages({ memoryPlaceId, popupRef }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async (id) => {
      const photos = await MemoryPhotosService.getPhotos(id);
      setPhotos(photos);
    };

    getPhotos(memoryPlaceId);

    //Обновление модального окна после рендера карусели
    const timer = setTimeout(() => {
      popupRef.current.update();
    }, 300);
    
    //Очистка таймера после размонтирования компоненты
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoryPlaceId]);

  

  const absolutePhotoBasePath = '/memoryPlaces_images';

  return (
    <>
      {photos.length !== 0 &&
      <Carousel variant="dark">
        {photos.map((photo, index) => (
          <Carousel.Item key={index} >
            <img
              className={css.carouselImage}
              src={`${absolutePhotoBasePath}/${photo.imagePath}`}
              alt=""
            />
            <Carousel.Caption className={css.carouselCaption}>
              <div>{photo.description}</div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      }
    </>
  );
}