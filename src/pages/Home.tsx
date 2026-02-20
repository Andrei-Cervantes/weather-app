import { useOpenWeatherService } from "@/api/services/openWeather.service";
import { useRapidService } from "@/api/services/rapid.service";
import CurrentWeather from "@/components/weather/CurrentWeather";
import SearchWithSuggestions from "@/components/search/SearchWithSuggestions";
import type { ICity } from "@/lib/typings/ICity";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Forecast from "@/components/weather/Forecast";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);

  const { fetchCities } = useRapidService();
  const { data: cities, isLoading: isCitiesLoading } = useQuery({
    queryKey: ["cities", search],
    queryFn: () => fetchCities(search),
    enabled: !!search.trim(),
  });

  const { fetchCurrentWeather, fetchForecast } = useOpenWeatherService();
  const { data: weatherData, isLoading: isWeatherLoading } = useQuery({
    queryKey: ["currentWeather", selectedCity?.id],
    queryFn: () => {
      if (!selectedCity) return null;
      return fetchCurrentWeather(selectedCity.latitude, selectedCity.longitude);
    },
    enabled: !!selectedCity,
  });

  const formatWeatherData = useMemo(() => {
    if (!weatherData || !selectedCity) return null;

    return {
      ...weatherData,
      name: `${selectedCity?.name}, ${selectedCity?.countryCode}`,
    };
  }, [weatherData, selectedCity]);

  const { data: forecastData, isLoading: isForecastLoading } = useQuery({
    queryKey: ["forecast", selectedCity?.id],
    queryFn: () => {
      if (!selectedCity) return null;
      return fetchForecast(selectedCity.latitude, selectedCity.longitude);
    },
    enabled: !!selectedCity,
  });

  return (
    <main className="bg-zinc-900 min-h-screen p-4 text-white">
      <div className="px-8">
        <SearchWithSuggestions<ICity>
          onSearch={setSearch}
          onSelect={setSelectedCity}
          suggestions={cities?.data ?? []}
          isLoading={isCitiesLoading}
          renderSuggestion={(city) => (
            <>
              {city.name}, {city.country}
              <span className="ml-2 text-xs text-zinc-400">
                {city.countryCode}
              </span>
            </>
          )}
          getSuggestionValue={(city) => city.name}
        />
      </div>
      <CurrentWeather data={formatWeatherData} isLoading={isWeatherLoading} />
      <Forecast data={forecastData} isLoading={isForecastLoading} />
    </main>
  );
};

export default Home;
