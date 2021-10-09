import axios from 'axios';

import { SERVER_URL } from '@env';


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
