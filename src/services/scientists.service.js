import { Api } from './api.service';

export const ScientistsService = {
    getScientists: async () => {
        const response = await Api.get('/api/scientists/all');
        return response.data;
    },
    createScientist: async (data) => {
        const response = await Api.post('/api/scientists/create', data);
        return response.data;
    }
};