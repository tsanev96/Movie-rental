import { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/Inbox";
import { createStyles, makeStyles } from "@mui/styles";
import axios from "axios";
import { Movie } from "../../types/Movie";
import { Genre } from "../../types/Genre";
import _ from "lodash";

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

type Column = {
  path: Paths;
  name: string;
};

export const Movies = () => {
  const classes = useStyles();

  const [currentGenre, selectCurrentGenre] = useState();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data: movies } = await axios.get<Movie[]>(
        "http://localhost:4000/api/movies"
      );
      setMovies(movies);
      // setGenres([{ title: "All Genres", id: "all", icon: {} }, ...genres]);
    };

    getData();
  }, []);

  const handleGenreSelect = (id: string) => {
    console.log("genre id", id);
  };

  const renderSideBar = () => {
    return (
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} disablePadding>
            <ListItemButton onClick={() => handleGenreSelect("")}>
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
    console.log(value);
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
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map(({ path, name }) => (
                      <TableCell key={path}>{name}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {movies.map((movie) => {
                    return (
                      <TableRow key={movie.title}>
                        {columns.map(({ path }) => {
                          return (
                            <TableCell key={path}>
                              {getCellValue(path, movie)}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
