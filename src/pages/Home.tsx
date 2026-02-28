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
    refetchOnWindowFocus: false,
  });

  const { fetchCurrentWeather, fetchForecast } = useOpenWeatherService();

  const { data: weatherData, isLoading: isWeatherLoading } = useQuery({
    queryKey: ["currentWeather", selectedCity?.id],
    queryFn: () =>
      selectedCity
        ? fetchCurrentWeather(selectedCity.latitude, selectedCity.longitude)
        : null,
    enabled: !!selectedCity,
    staleTime: 10 * 60 * 1000,
  });

  const { data: forecastData, isLoading: isForecastLoading } = useQuery({
    queryKey: ["forecast", selectedCity?.id],
    queryFn: () =>
      selectedCity
        ? fetchForecast(selectedCity.latitude, selectedCity.longitude)
        : null,
    enabled: !!selectedCity,
    staleTime: 10 * 60 * 1000,
  });

  const formattedForecast = useMemo(() => {
    if (!forecastData || !selectedCity) return null;

    return {
      ...forecastData,
      name: `${selectedCity.name}, ${selectedCity.countryCode}`,
    };
  }, [forecastData, selectedCity]);

  const backgroundImage = useMemo(() => {
    if (!weatherData) return bgDay;

    const { dt, sys } = weatherData;
    const isDay = dt > sys.sunrise && dt < sys.sunset;

    return isDay ? bgDay : bgNight;
  }, [weatherData]);

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden text-white bg-cover bg-center bg-no-repeat py-15 px-8 space-y-16"
      aria-label="Weather application"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header>
        <h1 className="font-bold text-4xl italic text-center md:text-start">
          Aeris
        </h1>
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
          placeholder="Search for cities..."
        />
      </header>
      <article className="flex flex-col md:flex-row gap-4">
        {selectedCity && (
          <>
            <section aria-label="Weather information" className="flex gap-4">
              <h2 id="current-weather-heading" className="sr-only">
                Current Weather
              </h2>
              <CurrentWeather data={weatherData} isLoading={isWeatherLoading} />
            </section>
            <section>
              <h2 id="forecast-heading" className="sr-only">
                Weather Forecast
              </h2>
              <Forecast
                data={formattedForecast}
                isLoading={isForecastLoading}
              />
            </section>
          </>
        )}
      </article>
    </main>
  );
};

export default Home;
