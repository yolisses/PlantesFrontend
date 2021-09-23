import axios from 'axios';
import {setupCache} from 'axios-cache-adapter';

import {SERVER_URL} from '@env';

const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 minutes
});

export const api = axios.create({
  adapter: cache.adapter,
  baseURL: SERVER_URL,
});
