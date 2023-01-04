import { render, screen } from "@testing-library/react";

import Option from "../Option";

test("Displays image for each scoop option from server", async () => {
  render(<Option optionType="scoops" />);

  //find images
  // here we use find by beacuse the image is generate by a async function
  // these images come from server
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); // the image name end with scoop
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each topping from server", async () => {
  render(<Option optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
