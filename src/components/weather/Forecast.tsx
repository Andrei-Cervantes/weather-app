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
      {isLoading ? <p>Loading forecast...</p> : <div>{data?.name}</div>}
      <div className="flex">
        {data?.list.map((item) => (
          <ForecastCard item={item} />
        ))}
      </div>
    </Card>
  );
};

export default Forecast;
