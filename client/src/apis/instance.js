import axios from 'axios';

export const baseInstance = axios.create({ baseURL: 'http://localhost:4000' });

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
