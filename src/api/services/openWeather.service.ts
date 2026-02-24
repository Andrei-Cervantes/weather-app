import { openWeatherClient } from "../clients/openWeather.client";
import { useAxios } from "../../hooks/useAxios";
import type {
  IForecastResponse,
  IWeatherResponse,
} from "@/lib/typings/IWeather";

export const useOpenWeatherService = () => {
  const { GET } = useAxios(openWeatherClient);

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const response = await GET<IWeatherResponse>({
      url: "/weather",
      params: { lat, lon, units: "metric" },
    });

    return response.data;
  };

  const fetchForecast = async (lat: number, lon: number) => {
    const response = await GET<IForecastResponse>({
      url: "/forecast",
      params: { lat, lon, units: "metric" },
    });

    return response.data;
  };

  return { fetchCurrentWeather, fetchForecast };
};
