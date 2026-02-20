import { useRapidService } from "@/api/services/rapid.service";
import CurrentWeather from "@/components/currentWeather/currentWeather";
import SearchWithSuggestions from "@/components/search/SearchWithSuggestions";
import type { ICity } from "@/lib/typings/ICity";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
  const { fetchCities } = useRapidService();

  const { data: cities, isLoading } = useQuery({
    queryKey: ["cities", search],
    queryFn: () => fetchCities(search),
    enabled: !!search.trim(),
  });

  return (
    <main className="bg-zinc-900 min-h-screen p-4 text-white">
      <div className="px-8">
        <SearchWithSuggestions<ICity>
          onSearch={setSearch}
          onSelect={setSelectedCity}
          suggestions={cities?.data ?? []}
          isLoading={isLoading}
          renderSuggestion={(city) => <span>{city.name}</span>}
          getSuggestionValue={(city) => city.name}
        />
      </div>
      <CurrentWeather city={selectedCity} />
    </main>
  );
};

export default Home;
