import { Api } from './api.service';

export const MemoryPhotosService = {
  getPhotos: async (memoryPlaceId) => {
    const response = await Api.get(`/api/photos/memoryPlaces?memoryPlaceId=${memoryPlaceId}`);
    return response.data;
  }
};