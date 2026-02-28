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
import CWDetailsCard from "./CWDetailsCard";
import { capitalizeWords } from "@/lib/utils";

interface CurrentWeatherProps {
  data: IWeatherResponse | null | undefined;
  isLoading: boolean;
}

const CurrentWeather = ({ data, isLoading }: CurrentWeatherProps) => {
  const description =
    capitalizeWords(data?.weather[0].description ?? "") ??
    "No description available.";

  const temperature = data?.main.temp;
  const feelsLike = data?.main.feels_like;
  const humidity = data?.main.humidity;
  const pressure = data?.main.pressure;
  const windSpeed = data?.wind.speed;

  const renderIcon = () => {
    if (!data) {
      return <HelpCircle size={100} aria-hidden="true" />;
    }

    return (
      <img
        src={Icons[data.weather[0].icon]}
        alt={`Weather condition: ${description}`}
        className="w-68"
      />
    );
  };

  return (
    <article
      className="h-full w-full flex flex-row justify-between items-center"
      aria-busy={isLoading}
    >
      {isLoading ? (
        <div role="status" aria-live="polite">
          <LoaderCircle className="animate-spin" aria-hidden="true" />
          <span className="sr-only">Loading current weather...</span>
        </div>
      ) : (
        <div className="flex flex-col w-full justify-between h-full gap-4">
          <section
            aria-label="Current weather condition"
            className="flex flex-col items-center h-full"
          >
            {renderIcon()}
            <p className="text-6xl flex leading-14">
              {temperature}
              <span className="text-3xl">°C</span>
            </p>
            <p className="text-3xl">{description}</p>
          </section>
          <section
            aria-label="Current weather details"
            className="grid grid-cols-2 gap-4 w-full"
          >
            <CWDetailsCard>
              <Thermometer size={48} />
              <p>Feels Like</p>
              <p>{feelsLike}°C</p>
            </CWDetailsCard>
            <CWDetailsCard>
              <Droplet size={48} />
              <p>Humidity</p>
              <p>{humidity}%</p>
            </CWDetailsCard>
            <CWDetailsCard>
              <Wind size={48} />
              <p>Wind Speed</p>
              <p>{windSpeed} m/s</p>
            </CWDetailsCard>
            <CWDetailsCard>
              <Gauge size={48} />
              <p>Pressure</p>
              <p>{pressure} hPa</p>
            </CWDetailsCard>
          </section>
        </div>
      )}
    </article>
  );
};

export default CurrentWeather;
