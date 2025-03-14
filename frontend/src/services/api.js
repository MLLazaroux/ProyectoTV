import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Ajusta la URL si es necesario

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
