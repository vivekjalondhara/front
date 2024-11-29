// ** Packages **
import { Store } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_APP_API_URL } from "config";

export const Axios = axios.create({ baseURL: `${REACT_APP_API_URL}` });
export const setupAxios = (store: Store) => {
  // set token in header
  Axios.interceptors.request.use((request) => {
    const authToken = localStorage.getItem("access_token");
    if (request.headers !== undefined && authToken) {
      request.headers.Authorization = `Bearer ${authToken}`;
    }

    return request;
  });
};

export default axios;
