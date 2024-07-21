import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-anexa-filme.onrender.com",
});
