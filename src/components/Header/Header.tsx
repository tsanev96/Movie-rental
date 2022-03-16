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
import { URL } from "../../constants/url";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import { NavLink as NavLinkType } from "../../types/NavLink";

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

  const { data, isLoading } = useFetchHTTP<NavLinkType[]>(URL.nav, []);

  if (isLoading) {
    return <Box>Loading</Box>;
  }

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
            {data.map(({ name, path }) => (
              <NavLink className={classes.link} key={path} to={path}>
                {name}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
