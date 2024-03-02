import axios from 'axios';
import { Constants } from '../constants/api.const';

export const Api = axios.create({
  baseURL: Constants.BsuMapApi
});

Api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);