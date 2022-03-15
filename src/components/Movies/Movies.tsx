import { useEffect, useState } from "react";
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
import { Movie } from "../../types/Movie";
import { Genre } from "../../types/Genre";
import _ from "lodash";
import { Column } from "../../types/Column";
import Table from "../shared/Table/Table";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";

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
  const [genres, setGenres] = useState<Genre[]>([]);

  const movies = useFetchHTTP<Movie[]>("movies", []);
  const fetchedGenres = useFetchHTTP<Genre[]>("genres", []);

  useEffect(() => {
    setGenres([
      { title: "All Genres", id: "all", icon: {} },
      ...fetchedGenres.data,
    ]);
  }, []);

  if (movies.isLoading || fetchedGenres.isLoading) {
    return <div>loader</div>;
  }

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
            <Table data={movies.data} columns={columns} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
