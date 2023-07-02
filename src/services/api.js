import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocket-movies-api-mb7f.onrender.com",
});
