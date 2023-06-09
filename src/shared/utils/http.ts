import axios from 'axios';
import { HTTP_RESPONSES } from 'shared/constants/http';

const axiosInstance = axios.create({ baseURL: '' });

const defaultErrorResponse = () => ({
  data: {
    ...HTTP_RESPONSES.ServerError,
    message: `Something went wrong. Please try again.`,
  },
});

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
