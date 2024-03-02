import { Api } from './api.service';

export const MemoryPhotosService = {
  getMemoryPhotos: (memoryPlaceId) => {
      return Api.get(`/api/photos/memoryPlaces?memoryPlaceId=${memoryPlaceId}`).then((response) => response.data);
  }
}