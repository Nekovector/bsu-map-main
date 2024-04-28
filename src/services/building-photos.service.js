import { Api } from './api.service';

export const BuildingPhotosService = {
  getPhotos: async (buildingId) => {
    const response = await Api.get(`/api/photos/buildings?buildingId=${buildingId}`);
    return response.data;
  }
};