import { Api } from './api.service';

export const StructuralObjectsService = {
    getBsuComplex: () => {
        return Api.get('/api/structural-objects/all').then((response) => response.data);
    }
};