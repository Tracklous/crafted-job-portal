import { it, expect, vitest } from "vitest";
import { render } from "@testing-library/react";
import axios from "axios";

it("should handle empty response from the API call", async () => {
  vitest
    .spyOn(axios, "get")
    .mockResolvedValueOnce({ data: [{ job: "Sr. software Engineer" }] });

  const { findByText } = render(<div/>);
  const dataElement = await findByText(
    `This is HomePage:Sr. software Engineer`
  );
  expect(dataElement).toBeInTheDocument();
});
