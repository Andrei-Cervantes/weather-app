import type { ICityWeather } from "@/lib/typings/IWeather";

interface CurrentWeatherProps {
  data: ICityWeather | null;
  isLoading: boolean;
}

const CurrentWeather = ({ data, isLoading }: CurrentWeatherProps) => {
  return (
    <section className="py-4 px-8">
      {isLoading ? (
        <p>Loading current weather...</p>
      ) : (
        <div>
          <h1>Current Weather</h1>
          {data && <p>City: {data.name}</p>}
        </div>
      )}
    </section>
  );
};

export default CurrentWeather;
