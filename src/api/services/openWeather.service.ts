import { openWeatherClient } from "../clients/openWeather.client";
import { useAxios } from "../../hooks/useAxios";

export const useOpenWeatherService = () => {
  const { GET } = useAxios(openWeatherClient);

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const response = await GET({
      url: "/weather",
      params: { lat, lon },
    });

    return response.data;
  };

  const fetchForecast = async (lat: number, lon: number) => {
    const response = await GET({
      url: "/forecast",
      params: { lat, lon },
    });

    return response.data;
  };

  return { fetchCurrentWeather, fetchForecast };
};
