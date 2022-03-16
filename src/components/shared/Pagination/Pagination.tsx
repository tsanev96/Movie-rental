import { IconButton, Grid, Typography } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import PreviousPageIcon from "@mui/icons-material/KeyboardArrowLeft";
import NextPageIcon from "@mui/icons-material/KeyboardArrowRight";

interface IPagination {
  currentPage: number;
  pages: number;
  isPositionStart?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  pages,
  isPositionStart = false,
  onPageChange,
}: IPagination) => {
  const handlePreviousPage = (page: number) =>
    onPageChange(page === 0 ? 1 : page);

  const handleNextPage = (page: number) =>
    onPageChange(page > pages ? page - 1 : page);

  return (
    <Grid
      container
      justifyContent={isPositionStart ? "flex-start" : "flex-end"}
      alignItems="center"
    >
      <Typography style={{ fontWeight: 500 }}>
        {currentPage} of {pages}
      </Typography>
      <IconButton disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        <FirstPageIcon />
      </IconButton>
      <IconButton
        disabled={currentPage === 1}
        onClick={() => handlePreviousPage(currentPage - 1)}
      >
        <PreviousPageIcon />
      </IconButton>
      <IconButton
        disabled={currentPage === pages}
        onClick={() => handleNextPage(currentPage + 1)}
      >
        <NextPageIcon />
      </IconButton>
      <IconButton
        disabled={currentPage === pages}
        onClick={() => onPageChange(pages)}
      >
        <LastPageIcon />
      </IconButton>
    </Grid>
  );
};

export default Pagination;
