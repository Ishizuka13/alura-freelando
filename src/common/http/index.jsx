import axios from "axios";
import { TokenStorage } from "../tokenStorage";

export const http = axios.create({
  baseURL: "http://localhost:8080/",
});

http.interceptors.request.use(
  function (config) {
    const token = TokenStorage.Accesstoken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

const ignoredRoutes = ["auth/login", "auth/refresh"];

const refreshToken = async () => {
  const token = TokenStorage.Refreshtoken;
  if (token) {
    return axios
      .get("http://localhost:8080/auth/refresh", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        TokenStorage.defineTokens(
          response.data.access_token,
          response.data.refresh_token
        );
      });
  }
};

const handleError401 = async (err) => {
  await refreshToken().then(() => http(err.config));
  return Promise.reject(err);
};

http.interceptors.response.use(
  (response) => response,
  function (error) {
    if (
      !ignoredRoutes.includes(error.config.url) &&
      error.response.status === 401
    ) {
      return handleError401(error);
    }
    return Promise.reject(error);
  }
);
