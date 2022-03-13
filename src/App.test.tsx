import { render } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./services";
import App from "./App";

describe("App Component", () => {
  test("renders without crash", () => {
    const { container } = render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
  });
});
