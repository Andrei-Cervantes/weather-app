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
  const description =
    data?.weather[0].description ?? "No description available.";

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
        className="h-40 w-40"
      />
    );
  };

  return (
    <article
      className="mt-24 flex flex-row justify-between items-center"
      aria-busy={isLoading}
    >
      {isLoading ? (
        <div role="status" aria-live="polite">
          <LoaderCircle className="animate-spin" aria-hidden="true" />
          <span className="sr-only">Loading current weather...</span>
        </div>
      ) : (
        <>
          {/* Main temperature block */}
          <header className="flex items-end gap-2">
            <p className="text-[108px] leading-26">
              <data value={temperature}>{temperature ?? "-.-"}</data>
            </p>
            <div>
              <p aria-hidden="true">°C</p>
              <p className="text-xl font-medium capitalize">{description}</p>
            </div>
          </header>

          {/* Weather details */}
          <section className="flex items-center gap-6 border rounded-2xl p-4">
            <figure className="flex items-center justify-center">
              {renderIcon()}
            </figure>

            <dl className="space-y-2">
              <div className="flex gap-2 items-center">
                <Thermometer aria-hidden="true" />
                <dt className="sr-only">Feels like</dt>
                <dd>{feelsLike ?? "-"} °C</dd>
              </div>

              <div className="flex gap-2 items-center">
                <Droplet aria-hidden="true" />
                <dt className="sr-only">Humidity</dt>
                <dd>{humidity ?? "-"}%</dd>
              </div>

              <div className="flex gap-2 items-center">
                <Gauge aria-hidden="true" />
                <dt className="sr-only">Pressure</dt>
                <dd>{pressure ?? "-"} hPa</dd>
              </div>

              <div className="flex gap-2 items-center">
                <Wind aria-hidden="true" />
                <dt className="sr-only">Wind speed</dt>
                <dd>{windSpeed ?? "-"} m/s</dd>
              </div>
            </dl>
          </section>
        </>
      )}
    </article>
  );
};

export default CurrentWeather;
