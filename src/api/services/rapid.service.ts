import { type ICityResponse } from "@/lib/typings/ICity";
import { useAxios } from "../../hooks/useAxios";
import { rapidClient } from "../clients/rapid.client";

export const useRapidService = () => {
  const { GET } = useAxios(rapidClient);

  const fetchCities = async (searchInput: string) => {
    const response = await GET<ICityResponse>({
      url: "/cities",
      params: { minPopulation: 100000, namePrefix: searchInput },
    });

    return response.data;
  };

  return {
    fetchCities,
  };
};
