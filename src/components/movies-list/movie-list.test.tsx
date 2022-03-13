import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { films } from "../../__mock-data__/films";
import MoviesList from ".";

describe("Movies List", () => {
  test("renders items", () => {
    const { container } = render(
      <BrowserRouter>
        <MoviesList items={films} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Return of the Jedi/i)).toBeInTheDocument();
    const items = container.querySelectorAll("h2");
    expect(items).toHaveLength(6);
  });
});
