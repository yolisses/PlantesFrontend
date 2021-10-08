import axios from 'axios';
import {setupCache} from 'axios-cache-adapter';

import {SERVER_URL} from '@env';

const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 minutes
});

export const api = axios.create({
  // adapter: cache.adapter,
  baseURL: SERVER_URL,
});

export function setAuthorizationHeader(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function resetAuthorizationHeader() {
  api.defaults.headers.common.Authorization = null;
}
