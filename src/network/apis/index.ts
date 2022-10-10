import axios from 'axios';
import {
  requestHandler,
  successHandler,
  errorHandler
} from '../interceptors';

const BASE_URL = 'https://upayments-studycase-api.herokuapp.com/api'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Handle request process
axiosInstance.interceptors.request.use(
  (request) => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

