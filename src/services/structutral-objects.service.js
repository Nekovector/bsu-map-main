import { Api } from './api.service';

export const StructuralObjectsService = {
    getBsuComplex: async () => {
        const response = await Api.get('/api/structural-objects/all');
        return response.data;
    }
};