import {
  AppBar,
  Box,
  Container,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const pages = ["movies", "customers", "rentals", "register", "login"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      "&.root": {
        fontWeight: "bold",
        color: "red",
      },
    },
    link: {
      margin: "0 6px",
      textDecoration: "none",
      color: theme.palette.common.white,
    },
  })
);

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className={classes.logo}
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              //   display: { xs: "none", md: "flex" },
              //   backgroundColor: { xs: "red", md: "orange" },
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink className={classes.link} key={page} to={`/${page}`}>
                {page}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
