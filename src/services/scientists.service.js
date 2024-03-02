import { Api } from "./api.service";

export const ScientistsService = {
    getScientists: () => {
        return Api.get('/api/scientists/all').then((response) => response.data);
    }
}