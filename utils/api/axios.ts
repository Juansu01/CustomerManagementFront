import axios from 'axios';

export const myAxios = axios.create({
  baseURL: 'https://tsz7vpmrpe.us-east-1.awsapprunner.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
