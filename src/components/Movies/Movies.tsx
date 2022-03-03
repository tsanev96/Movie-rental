import { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/Inbox";
import { createStyles, makeStyles } from "@mui/styles";
import axios from "axios";
import { Movie } from "../../types/Movie";
import { Genre } from "../../types/Genre";
import _ from "lodash";
import { Column } from "../../types/Column";
import Table from "../shared/Table/Table";

const useStyles = makeStyles(() =>
  createStyles({
    leftSide: {},
    rightSide: {},
  })
);

enum Paths {
  Title = "title",
  Genre = "genre.title",
  stock = "stock",
  dailyRentalRate = "dailyRentalRate",
}

export const Movies = () => {
  const classes = useStyles();

  const [currentGenre, selectCurrentGenre] = useState("all");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data: movies } = await axios.get<Movie[]>(
        "http://localhost:4000/api/movies"
      );
      const { data: genres } = await axios.get<Genre[]>(
        "http://localhost:4000/api/genres"
      );
      setMovies(movies);
      setGenres([{ title: "All Genres", id: "all", icon: {} }, ...genres]);
    };

    getData();
  }, []);

  const handleGenreSelect = (genreId: string) => {
    selectCurrentGenre(genreId);
  };

  const renderSideBar = () => {
    return (
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} disablePadding>
            <ListItemButton
              onClick={() => handleGenreSelect(genre.id)}
              selected={currentGenre === genre.id}
            >
              <ListItemIcon>
                {/* TODO icon */}
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={genre.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  };

  const getCellValue = (path: Paths, movie: Movie) => {
    const value = _.get(movie, path);
    return value ? value : "";
  };

  const columns: Column[] = [
    { path: Paths.Title, name: "Title" },
    { path: Paths.Genre, name: "Genre" },
    { path: Paths.stock, name: "Stock" },
    { path: Paths.dailyRentalRate, name: "Daily Rate" },
  ];

  return (
    <Box>
      <Grid container>
        <Grid item xs={1}>
          {renderSideBar()}
        </Grid>
        <Grid item xs={11}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Table data={movies} columns={columns} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
