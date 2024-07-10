import axios from 'axios';

// Setting up Base URL
export const LoginApi = axios.create({
  baseURL: 'https://dummyjson.com',
});
