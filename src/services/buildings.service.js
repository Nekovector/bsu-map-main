import { Api } from './api.service';

export const BuildingsService = {
  getModernBuildings: async () => {
    const response = await Api.get('/api/buildings/modern');
    return response.data;
  },

  getHistoricalBuildings: async () => {
    const response = await Api.get('/api/buildings/historical');
    return response.data;
  }
};