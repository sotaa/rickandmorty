import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SearchBox } from "../search-box";

describe("Search Box", () => {
  it("renders search button", () => {
    render(<SearchBox />);

    const heading = screen.getByRole("button", {
      name: "Search",
    });

    expect(heading).toBeInTheDocument();
  });
});
