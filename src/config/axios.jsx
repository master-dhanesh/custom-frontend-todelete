import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://custom-restfull-nodeapi.onrender.com/',
  withCredentials: true,
});

export default instance;
