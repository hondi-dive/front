import axios from './index';

export const fetchPoints = async () => {
  try {
    const res = await axios.get('/points');

    return res;
  } catch (error) {
    alert('서버 에러 입니다.');
  }
};

export const fetchDetailPoint = async (id) => {
  try {
    const res = await axios.get(`/divepost/${id}`);

    return res;
  } catch (error) {
    alert('서버 에러 입니다.');
  }
};

export const createPoint = async (data) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  try {
    const res = await axios.post(`/diveposts`, data, headers);

    return res;
  } catch (error) {
    alert('서버 에러 입니다.');
  }
};

export const fetchFeed = async (id, filter) => {
  try {
    if (filter) {
      const res = await axios.get(`/diveposts/${id}?category=${filter}`);
      return res;
    } else {
      const res = await axios.get(`/diveposts/${id}`);
      return res;
    }
  } catch (error) {
    alert('서버 에러 입니다.');
  }
};

export const fetchDetailLog = async (id) => {
  try {
    const res = await axios.get(`/diveposts/${id}/detail`);

    return res;
  } catch (error) {
    alert('서버 에러 입니다.');
  }
};
