import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from "axios";
import { store } from "store";
import { FORBIDDEN } from "utils";
import i18next from "i18next";

const { REACT_APP_API_URL:baseURL } = process.env;

const apiService: AxiosInstance = axios.create({
  baseURL,
});

apiService.interceptors.request.use((config: AxiosRequestConfig) => {
  // @ts-ignore
  config.headers.common["Authorization"] = `Bearer ${
    store.getState().token?.token
  }`;

  config.headers.common["X-localization"] = i18next.language;

  return config;
});

apiService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return new Promise(function (resolve, reject) {
      if (error?.response) {
        // if (
        //   error.response.status === FORBIDDEN &&
        //   error.response.data.message === "User status inactive"
        // ) {
        //   store.dispatch({ type: "Token/REMOVE" });
        //   store.dispatch({ type: "User/REMOVE" });
        // }
      }
      return reject(error);
    });
  }
);

export default apiService;
