import axios from "axios";

export const openWeatherClient = axios.create({
  baseURL: import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL,
});
