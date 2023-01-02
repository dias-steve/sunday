import { rest } from "msw";

const toppingHandler = (req, res, ctx) => {
  return res(
    ctx.json([
      { name: "Cherries", imagePath: "/images/cherries.png" },
      { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
    ])
  );
};

export const handlers = [
  rest.get("https://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),

  rest.get("https://localhost:3030/toppings", toppingHandler),
];
