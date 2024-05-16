import { Api } from './api.service';

export const ScientistsService = {
    getScientists: async () => {
        const response = await Api.get('/api/scientists');
        return response.data;
    },
    getScientistsNames: async () => {
        const response = await Api.get('/api/scientists/names');
        return response.data;
    },
    createScientist: async (data) => {
        const response = await Api.post('/api/scientists', data);
        return response.data;
    },
    updateScientist: async (id, data) => {
        const response = await Api.put(`/api/scientists/${id}`, data);
        return response.data;
    },
    deleteScientist: async (id) => {
        const response = await Api.delete(`/api/scientists/${id}`);
        return response.data;
    }
};