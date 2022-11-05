import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CharacterListBar } from "../character-list-bar";

describe("Character ListBar", () => {
  it("renders Back to Home button", () => {
    const onClearFilter = () => {};
    render(<CharacterListBar onClearFilter={onClearFilter} />);

    const heading = screen.getByRole("button", {
      name: "Back to Home",
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders Clear Filter button", () => {
    const onClearFilter = () => {};
    render(<CharacterListBar onClearFilter={onClearFilter} />);

    const heading = screen.getByRole("button", {
      name: "Clear Filter",
    });

    expect(heading).toBeInTheDocument();
  });
});
