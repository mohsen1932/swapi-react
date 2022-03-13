import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "../../services";
import HomePage from ".";

describe("Home Page", () => {
  test("renders H1 text", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <HomePage />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const text = screen.getByText(/Search Star Wars Movies/i);
    expect(text).toBeInTheDocument();
  });
});
