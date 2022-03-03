import { ThemeProvider } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Routes } from "./components/Routes";
import { theme } from "./theme/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
