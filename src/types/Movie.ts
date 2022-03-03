import { Genre } from "./Genre";

export type Movie = {
  title: string;
  genre: Genre;
  stock: number;
  dailyRentalRate: number;
};
