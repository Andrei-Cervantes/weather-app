import { useOpenWeatherService } from "@/api/services/openWeather.service";
import { type ICity } from "@/lib/typings/ICity";
import { useQuery } from "@tanstack/react-query";

interface CurrentWeatherProps {
  city: ICity | null;
}

const CurrentWeather = ({ city }: CurrentWeatherProps) => {
  const { fetchCurrentWeather } = useOpenWeatherService();
  const { data, isLoading } = useQuery({
    queryKey: ["currentWeather", city?.id],
    queryFn: () => {
      if (!city) return null;
      fetchCurrentWeather(city.latitude, city.longitude);
    },
    enabled: !!city,
  });

  console.log("Current Weather Data:", data);

  return (
    <section className="py-4 px-8">
      {isLoading ? (
        <p>Loading current weather...</p>
      ) : (
        <div>
          <h1>Current Weather</h1>
          {city && <p>City: {city.name}</p>}
        </div>
      )}
    </section>
  );
};

export default CurrentWeather;
