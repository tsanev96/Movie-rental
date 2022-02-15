import { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/Inbox";
import { createStyles, makeStyles } from "@mui/styles";
import axios from "axios";
import { Movie } from "../../types/Movie";
import { Genre } from "../../types/Genre";

const useStyles = makeStyles(() =>
  createStyles({
    leftSide: {},
    rightSide: {},
  })
);

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

  return (
    <Box>
      <Grid container>
        <Grid item xs={1}>
          {renderSideBar()}
        </Grid>
        <Grid item xs={11}>
          movie table
        </Grid>
      </Grid>
    </Box>
  );
};
