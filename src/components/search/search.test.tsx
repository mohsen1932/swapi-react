import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from ".";

describe("Search Page", () => {
  test("renders 404 Not Found text", () => {
    const { container } = render(<Search isdisabled handler={() => {}} />);
    const input = container.querySelectorAll("input")[0];
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  test("handler", () => {
    const mockFn = jest.fn();
    const { container } = render(<Search handler={mockFn} />);
    const input = container.querySelectorAll("input")[0];
    fireEvent.change(input, { target: { value: "something" } });
    expect(mockFn).toHaveBeenCalledWith("something");
  });
});
