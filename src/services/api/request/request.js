import axios from 'axios';

export const api = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export default api();
