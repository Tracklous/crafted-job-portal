import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";

it("renders the heading with the correct class", () => {
  const { getByText } = render(<HomePage />);
  const headingElement = getByText("This is HomePage");
  expect(headingElement).toBeInTheDocument();
});
