import axios from 'axios';

export const myAxios = axios.create({
  baseURL: 'https://customer-management-back-844f0aa2477b.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
