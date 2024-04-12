import { Api } from "./api.service";

export const ScientistsService = {
    getScientists: () => {
        return Api.get('/api/scientists/all').then((response) => response.data);
    },
    createScientist: (data) => {
        return Api.post('/api/scientists/create', data).then((response) => response.data);
    }
}