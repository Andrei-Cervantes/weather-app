import type { ICityForecast } from "@/lib/typings/IWeather";
import { Card } from "../ui/card";
import ForecastCard from "./ForecastCard";

interface ForecastProps {
  data: ICityForecast | null | undefined;
  isLoading: boolean;
}

const Forecast = ({ data, isLoading }: ForecastProps) => {
  if (!data) return null;

  return (
    <Card className="p-8 bg-black/50 gap-0">
      <section aria-labelledby="forecast-heading">
        <h2 id="forecast-heading" className="text-lg font-bold">
          5 Day / 3 Hour Forecast
        </h2>
        <h3 id="forecast-heading" className="text-lg font-semibold">
          {data.name} Forecast
        </h3>
      </section>

      {isLoading ? (
        <p>Loading forecast...</p>
      ) : (
        <ul className="flex flex-col gap-6 overflow-x-auto">
          {data.list.slice(0, 7).map((item) => (
            <li key={item.dt}>
              <ForecastCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Forecast;
