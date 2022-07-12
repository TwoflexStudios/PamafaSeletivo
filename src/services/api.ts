import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

api.interceptors.request.use((config) => config);

export default api;
