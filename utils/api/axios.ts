import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL;

export const myAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
