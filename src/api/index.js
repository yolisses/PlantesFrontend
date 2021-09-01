import axios from 'axios';

import {SERVER_URL} from '@env';

console.error(SERVER_URL);

export const api = axios.create({
  baseURL: SERVER_URL,
});
