import axios from './index';

export const fetchPoints = async () => {
  const res = await axios.get('/points');

  return res;
};

export const fetchDetailPoint = async (id) => {
  const res = await axios.get(`/divepost/${id}`);

  return res;
};
