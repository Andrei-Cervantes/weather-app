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
    <Card className="p-4">
      <section aria-labelledby="forecast-heading">
        <h2 id="forecast-heading" className="text-lg font-semibold">
          {data.name} Forecast
        </h2>
      </section>

      {isLoading ? (
        <p>Loading forecast...</p>
      ) : (
        <ul className="flex gap-4 overflow-x-auto">
          {data.list.map((item) => (
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
