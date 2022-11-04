import axios from "axios";

export const xhrService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
