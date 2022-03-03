import express from "express";
import { Movie } from "../../src/types/Movie";

const router = express.Router();

router.get("/movies", async (req, res) => {
  const movies: Movie[] = [
    {
      title: "Terminator",
      genre: {
        id: "action",
        title: "Action",
      },
      dailyRentalRate: 3,
      stock: 100,
    },
    {
      title: "SpiderMan 2",
      genre: {
        id: "action",
        title: "Action",
      },
      dailyRentalRate: 4,
      stock: 344,
    },
    {
      title: "SAW",
      genre: {
        id: "horror",
        title: "Horror",
      },
      dailyRentalRate: 2,
      stock: 600,
    },
    {
      title: "Vikings",
      genre: {
        id: "action",
        title: "Action",
      },
      dailyRentalRate: 3,
      stock: 100,
    },
  ];

  res.send(movies);
});

export default router;
