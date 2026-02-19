import axios from "axios";

export const rapidClient = axios.create({
  baseURL: `${import.meta.env.VITE_RAPID_API_BASE_URL}/v1/geo`,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
  },
});
