import axios from "axios";

export const instance = axios.create({
  baseURL: "http://15.164.226.34/"
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.withCredentials = true;
    
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

