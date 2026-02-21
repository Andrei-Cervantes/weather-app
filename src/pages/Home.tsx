import { useOpenWeatherService } from "@/api/services/openWeather.service";
import { useRapidService } from "@/api/services/rapid.service";
import CurrentWeather from "@/components/weather/CurrentWeather";
import SearchWithSuggestions from "@/components/search/SearchWithSuggestions";
import type { ICity } from "@/lib/typings/ICity";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Forecast from "@/components/weather/Forecast";
import { bgDay, bgNight } from "@/assets/weatherBackground";

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

  const { data: forecastData, isLoading: isForecastLoading } = useQuery({
    queryKey: ["forecast", selectedCity?.id],
    queryFn: () => {
      if (!selectedCity) return null;
      return fetchForecast(selectedCity.latitude, selectedCity.longitude);
    },
    enabled: !!selectedCity,
  });

  const formatForecastData = useMemo(() => {
    if (!forecastData || !selectedCity) return null;

    return {
      ...forecastData,
      name: `${selectedCity?.name}, ${selectedCity?.countryCode}`,
    };
  }, [forecastData, selectedCity]);

  const backgroundImage = useMemo(() => {
    if (!weatherData) return bgDay;

    const { dt, sys } = weatherData;

    const isDay = dt > sys.sunrise && dt < sys.sunset;

    return isDay ? bgDay : bgNight;
  }, [weatherData]);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-lg scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-4/5 max-w-250 rounded-4xl p-8 bg-zinc-900/70 shadow-2xl space-y-8">
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
        <CurrentWeather data={weatherData} isLoading={isWeatherLoading} />
        <Forecast data={formatForecastData} isLoading={isForecastLoading} />
      </div>
    </main>
  );
};

export default Home;
