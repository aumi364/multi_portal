import axios from 'axios';
import { message } from 'antd';
import { authStore } from '../store/auth';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(config => {
  const token = authStore(state => state.token);
  if (token) {
    config.headers.Authorization = `jwt ${token}`;
  }

  return config;
});

// http.interceptors.response.use(null, error => {
//   if (error?.response?.message) {
//     message.error(error.response.message);
//     return { error };
//   }
//
//   message.error('Something went wrong!');
//
//   return { error };
// });

export default http;
