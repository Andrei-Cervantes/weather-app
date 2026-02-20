import type { IForecastResponse } from "@/lib/typings/IWeather";
import { Icons } from "@/assets/weatherIcon";

interface ForecastProps {
  data: IForecastResponse | null | undefined;
  isLoading: boolean;
}

const Forecast = ({ data, isLoading }: ForecastProps) => {
  return (
    <div>
      {isLoading ? <p>Loading forecast...</p> : <div>{data?.city.name}</div>}
      {data?.list.map((item) => (
        <div>
          <img src={Icons[item.weather[0].icon]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Forecast;
