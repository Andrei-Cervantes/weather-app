import type { ICityWeather } from "@/lib/typings/IWeather";
import { LoaderCircle, Thermometer, Droplet, Wind, Gauge } from "lucide-react";
import { Icons } from "@/assets/weatherIcon";

interface CurrentWeatherProps {
  data: ICityWeather | null;
  isLoading: boolean;
}

const CurrentWeather = ({ data, isLoading }: CurrentWeatherProps) => {
  if (!data) return null;

  return (
    <div className="mt-32 mx-8 flex flex-row justify-between items-center">
      {isLoading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <>
          <div className="flex items-end gap-2">
            <p className="text-[64px]">{data?.main.temp}</p>
            <div className="mb-3">
              <p>°C</p>
              <p>{data.weather[0].description}</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={Icons[data.weather[0].icon]}
              alt="Weather Icon"
              className="h-40 w-40"
            />
            <div className="space-y-2">
              <p className="flex gap-2">
                <Thermometer /> Feels like: {data.main.feels_like} °C
              </p>
              <p className="flex gap-2">
                <Droplet /> Humidity: {data.main.humidity}%
              </p>
              <p className="flex gap-2">
                <Gauge /> Pressure: {data.main.pressure} hPa
              </p>
              <p className="flex gap-2">
                <Wind /> Wind: {data.wind.speed} m/s
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
