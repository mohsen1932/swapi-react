import { extractIDFromURL } from ".";

describe("Helpers", () => {
  test("extractIDFromURL", () => {
    expect(extractIDFromURL("https://swapi.dev/api/films/2/")).toEqual("2");
  });
});
