import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("handle error for scoops and toppings routes", async () => {
  //Server Mocking
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<OrderEntry />);

  // we need wait for here beacause we want genrate 2 alertes
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});

test.skip("not a test", () => {}); // skip for not run the test or only for run only this test
