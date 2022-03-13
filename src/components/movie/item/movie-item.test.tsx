import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../../services";
import { films } from "../../../__mock-data__/films";
import MovieItem from ".";

describe("Movies List Item", () => {
  test("renders text", () => {
    render(
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <MovieItem item={films[0]} />
      </QueryClientProvider>
    );
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    expect(screen.getByText(/George Lucas/i)).toBeInTheDocument();
    expect(screen.getByText(/Gary Kurtz, Rick McCallum/i)).toBeInTheDocument();
    expect(screen.getByText(/1977-05-25/i)).toBeInTheDocument();
  });
});
