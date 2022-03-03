import express from "express";
import { Genre } from "../../src/types/Genre";

const router = express.Router();

router.get("/genres", async (req, res) => {
  const genres: Genre[] = [
    {
      id: "action",
      title: "action",
      icon: {},
    },
    {
      id: "comedy",
      title: "comedy",
      icon: {},
    },
    {
      id: "horror",
      title: "horror",
      icon: {},
    },
  ];

  res.send(genres);
});

export default router;
