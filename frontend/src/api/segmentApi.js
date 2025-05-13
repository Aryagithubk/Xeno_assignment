// src/api/segmentApi.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/segments';

// Create a segment
export const createSegment = async (segmentData) => {
  const res = await axios.post(BASE_URL, segmentData);
  return res.data;
};

// Fetch all segments
export const fetchSegments = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

// Delete a segment
export const deleteSegment = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
