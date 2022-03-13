import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MoviePage from ".";

describe("Movie Page", () => {
  test("go to home on click", () => {
    render(
      <BrowserRouter>
        <MoviePage />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/<- Back to the list/i);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toEqual("/")
  });
});
