import axios, { AxiosError, AxiosResponse } from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status };
    -error.response as AxiosResponse;
    return Promise.reject(error.response);
  }
);
