import { Icons } from "@/assets/weatherIcon";
import type { ICityForecast } from "@/lib/typings/IWeather";

interface ForecastCardProps {
  item: ICityForecast["list"][number];
}

const ForecastCard = ({ item }: ForecastCardProps) => {
  const iconCode = item.weather[0].icon;
  const description = item.weather[0].description;

  return (
    <article className="flex flex-col items-center p-2">
      <time dateTime={item.dt_txt}>
        {new Date(item.dt_txt).toLocaleDateString()}
      </time>

      <img src={Icons[iconCode]} alt={description} className="w-10 h-10" />

      <p>{Math.round(item.main.temp)}°C</p>
    </article>
  );
};

export default ForecastCard;
