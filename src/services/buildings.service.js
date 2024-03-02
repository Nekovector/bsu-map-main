import { Api } from './api.service';

export const BuildingsService = {
  getModernBuildings: () => {
    return Api.get('/api/buildings/modern').then((response) => response.data);
  },

  getHistoricalBuildings: () => {
    return Api.get('/api/buildings/historical').then((response) => response.data);
  }
}