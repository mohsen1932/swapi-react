import { QueryClient } from "react-query";

const API_URL = "https://swapi.dev/api";

export const getAllMovies = () =>
  fetch(`${API_URL}/films`)
    .then((r) => r.json())
    .then((d) => d.results);

export const getMovie = (id: string) =>
  fetch(`${API_URL}/films/${id}`)
    .then((r) => r.json())
    .then((d) => d);

export const getPeople = (url: string) =>
  fetch(url)
    .then((r) => r.json())
    .then((d) => d);

export const queryClient = new QueryClient();
