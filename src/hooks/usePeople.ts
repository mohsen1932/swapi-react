import { useQuery } from "react-query";

import { getPeople } from "../services";

export default function usePeople(url: string) {
  return useQuery(["people", url], () => getPeople(url), {
    staleTime: 60 * 60 * 1000, // cache data for 60 minutes
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
}
