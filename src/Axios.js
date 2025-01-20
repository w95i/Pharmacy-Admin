import axios from "axios";


const axiosData = axios.create({
  baseURL: 'https://api.jayak.net/api',
  // baseURL: 'http://192.168.0.247:5200/api',
  headers: {
    'Content-Type': 'application/json; Charset=utf-8',
    'Accept':'*/*',
  },
});

export default axiosData;