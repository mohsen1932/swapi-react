import { useQuery } from "react-query";

import { getAllMovies } from "../services";

export default function useMoviesList() {
  return useQuery("list", () => getAllMovies(), {
    staleTime: 60 * 60 * 1000, // cache data for 60 minutes
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
}
