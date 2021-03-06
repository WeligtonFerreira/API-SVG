import axios from 'axios';

const port = 3001;
const url = `http://localhost:${port}/`;

const api = axios.create({ baseURL: url });

export default api;