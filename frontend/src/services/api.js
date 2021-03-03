import axios from 'axios';

const url = `http://localhost:${process.env.PORT}`;

const api = axios.create({ baseURL: url });

export default api;