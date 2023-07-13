import axios, { type InternalAxiosRequestConfig } from 'axios';
import { X_HEADERS } from 'shared/constants/http';
import { AUTH_LS } from 'shared/constants/local-storage';

import { LocalStorageUtil } from './local-storage';

function setAuthHeaders(request: InternalAxiosRequestConfig) {
  const accessToken = LocalStorageUtil.get(AUTH_LS.AccessToken);
  request.headers[X_HEADERS.AccessToken] = accessToken;
}

function defaultErrorResponse() {
  return {
    data: {
      statusCode: 500,
      message: `Something went wrong. Please try again.`,
    },
  };
}

const axiosInstance = axios.create({ baseURL: '' });

axiosInstance.interceptors.request.use(
  request => {
    setAuthHeaders(request);
    return request;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  res => res,
  error => {
    if (!error.response) {
      return Promise.reject({ ...error, response: defaultErrorResponse() });
    }

    return Promise.reject(error);
  }
);

export const httpClient = axiosInstance;
