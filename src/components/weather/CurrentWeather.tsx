import type { IWeatherResponse } from "@/lib/typings/IWeather";
import {
  LoaderCircle,
  Thermometer,
  Droplet,
  Wind,
  Gauge,
  HelpCircle,
} from "lucide-react";
import { Icons } from "@/assets/weatherIcon";

interface CurrentWeatherProps {
  data: IWeatherResponse | null | undefined;
  isLoading: boolean;
}

const CurrentWeather = ({ data, isLoading }: CurrentWeatherProps) => {
  const renderIcon = () => {
    if (!data) return <HelpCircle size={100} />;

    return (
      <img
        src={Icons[data.weather[0].icon]}
        alt="Weather Icon"
        className="h-40 w-40"
      />
    );
  };
  return (
    <div className="mt-24 flex flex-row justify-between items-center">
      {isLoading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <>
          <div className="flex items-end gap-2">
            <p className="text-[108px] leading-26">
              {data?.main.temp ?? "-.-"}
            </p>
            <div>
              <p>°C</p>
              <p className="text-xl font-medium">
                {data?.weather[0].description ?? "No description available."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border rounded-2xl p-4">
            {renderIcon()}
            <div className="space-y-2">
              <p className="flex gap-2">
                <Thermometer /> Feels like: {data?.main.feels_like ?? "-"} °C
              </p>
              <p className="flex gap-2">
                <Droplet /> Humidity: {data?.main.humidity ?? "-"}%
              </p>
              <p className="flex gap-2">
                <Gauge /> Pressure: {data?.main.pressure ?? "-"} hPa
              </p>
              <p className="flex gap-2">
                <Wind /> Wind: {data?.wind.speed ?? "-"} m/s
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
