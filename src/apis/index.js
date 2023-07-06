import Axios from 'axios';

export const createApi = (headers) => {
  const _customAxios = Axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'http://172.30.1.85:8080',
    withCredentials: true,
    validateStatus: (status) => status >= 200 && status < 400,
    headers: headers,
  });

  _customAxios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data);
    },

    async (error) => {
      return Promise.reject(error);
    },
  );

  _customAxios.interceptors.request.use((config) => {
    return config;
  });

  return _customAxios;
};

const customAxios = createApi();

export default customAxios;
