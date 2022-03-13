import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { films } from "../../../__mock-data__/films";
import MoviesListItem from ".";

describe("Movies List Item", () => {
  test("renders text", () => {
    render(
      <BrowserRouter>
        <MoviesListItem item={films[0]} />
      </BrowserRouter>
    );
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    expect(screen.getByText(/George Lucas/i)).toBeInTheDocument();
    expect(screen.getByText(/Gary Kurtz, Rick McCallum/i)).toBeInTheDocument();
    expect(screen.getByText(/1977-05-25/i)).toBeInTheDocument();
  });
});
