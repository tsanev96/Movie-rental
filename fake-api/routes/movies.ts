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
    {
      title: "Something else",
      genre: {
        id: "action",
        title: "Action",
      },
      dailyRentalRate: 3,
      stock: 100,
    },
    {
      title: "Malcolm in the Middle",
      genre: {
        id: "comedy",
        title: "comedy",
      },
      dailyRentalRate: 3,
      stock: 100,
    },
    {
      title: "The Simpson",
      genre: {
        id: "comedy",
        title: "comedy",
      },
      dailyRentalRate: 3,
      stock: 100,
    },
    {
      title: "Good Girls",
      genre: {
        id: "action",
        title: "Action",
      },
      dailyRentalRate: 3,
      stock: 100,
    },
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
  ];

  res.send(movies);
});

export default router;
