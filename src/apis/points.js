import axios from './index';

export const fetchPoints = async () => {
  const res = await axios.get('/points');

  return res;
};

export const fetchDetailPoint = async (id) => {
  const res = await axios.get(`/divepost/${id}`);

  return res;
};

export const createPoint = async (data) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  const res = await axios.post(`/diveposts`, data, headers);

  return res;
};
