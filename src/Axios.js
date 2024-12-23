import axios from "axios";


const axiosData = axios.create({
  baseURL: 'https://api.jayak.net/api',
  headers: {
    'Content-Type': 'application/json; Charset=utf-8',
    'Accept':'*/*',
  },
});

export default axiosData;