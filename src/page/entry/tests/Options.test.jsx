import { render, screen } from "@testing-library/react";

import Option from "../Option";

test("displays image for each scoop ontion from server", async () => {
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
