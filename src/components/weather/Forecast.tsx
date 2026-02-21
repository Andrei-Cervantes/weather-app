import type { ICityForecast } from "@/lib/typings/IWeather";
import { Icons } from "@/assets/weatherIcon";
import { Card } from "../ui/card";

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
          <div>
            <img src={Icons[item.weather[0].icon]} alt="" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Forecast;
