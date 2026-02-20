import axios from "axios";

export const openWeatherClient = axios.create({
  baseURL: `${import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL}/data/2.5`,
  params: {
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
  },
});
