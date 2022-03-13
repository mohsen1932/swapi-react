import { useQuery } from "react-query";

import { getMovie } from "../services";

export default function useMovie(id: string) {
  return useQuery(["movie", id], () => getMovie(id), {
    staleTime: 60 * 60 * 1000, // cache data for 60 minutes
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
}
