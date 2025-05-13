

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/segments';

export const createSegment = async (segmentData) => {
  const res = await axios.post(BASE_URL, segmentData);
  return res.data;
};

export const fetchSegments = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};


export const deleteSegment = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
