//Checkbox is unchecked by default
//checking checkbox enables button
//unchecking checkox again ddiable button

import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Checkbox uncheck by default", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  expect(confirmButton).toBeDisabled();
});

test("Checking checkbox enables on the fisrt click and disable the button on the second click ", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
