import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from ".";

describe("NotFound Page", () => {
  test("renders 404 Not Found text", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const text = screen.getByText(/404 Not Found./i);
    expect(text).toBeInTheDocument();
  });

  test("go to home on click", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/<- home page/i);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toEqual("/")
  });
});
