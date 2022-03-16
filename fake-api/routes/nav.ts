import express from "express";
import { NavLink } from "../../src/types/NavLink";

const router = express.Router();

router.get("/nav", async (req, res) => {
  const navLinks: NavLink[] = [
    {
      name: "movies",
      path: "movies",
    },
    {
      name: "customers",
      path: "customers",
    },
    {
      name: "rentals",
      path: "rentals",
    },
    {
      name: "register",
      path: "register",
    },
    {
      name: "login",
      path: "login",
    },
  ];

  res.send(navLinks);
});

export default router;
