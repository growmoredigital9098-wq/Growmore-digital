import axios from 'axios';

const API = axios.create({
  baseURL: 'https://growmore-backend-de5h.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitConsultation = async (formData) => {
  try {
    const response = await API.post('/consultation', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Something went wrong';
  }
};