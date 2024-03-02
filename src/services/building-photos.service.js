import { Api } from './api.service';

export const BuildingPhotosService = {
  getPhotos: (buildingId) => {
      return Api.get(`/api/photos/buildings?buildingId=${buildingId}`).then((response) => response.data);
  }
}