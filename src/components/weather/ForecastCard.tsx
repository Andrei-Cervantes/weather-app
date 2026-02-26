import { Icons } from "@/assets/weatherIcon";
import type { ICityForecast } from "@/lib/typings/IWeather";
import { capitalizeWords } from "@/lib/utils";

interface ForecastCardProps {
  item: ICityForecast["list"][number];
}

const ForecastCard = ({ item }: ForecastCardProps) => {
  const iconCode = item.weather[0].icon;
  const description = capitalizeWords(item.weather[0].description);
  const date = new Date(item.dt_txt.replace(" ", "T"));

  return (
    <article className="flex items-center gap-4">
      <time
        dateTime={date.toISOString()}
        className="flex flex-col items-center text-center"
      >
        <span>{date.toLocaleDateString()}</span>
        <span>
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </time>

      <img src={Icons[iconCode]} alt={description} className="w-20 h-20" />

      <p>
        {Math.round(item.main.temp_min)}°C - {Math.round(item.main.temp_max)}°C
      </p>
      <p>{description}</p>
    </article>
  );
};

export default ForecastCard;
