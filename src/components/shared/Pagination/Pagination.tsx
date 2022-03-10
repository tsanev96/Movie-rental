import { IconButton, Grid } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import PreviousPageIcon from "@mui/icons-material/KeyboardArrowLeft";
import NextPageIcon from "@mui/icons-material/KeyboardArrowRight";

interface IProps {
  currentPage: number;
  pages: number;
  isPositionStart?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, pages, isPositionStart, onPageChange }: IProps) => {

  const handleFirstPage = () => onPageChange(1)
  const handleLastPage = () => onPageChange(pages)
  const handlePreviousPage = (page: number) => onPageChange(page === 0 ? 1 : page)
  const handleNextPage = (page: number) => onPageChange(page > pages ? page - 1 : page)

  return (
    <Grid container justifyContent={isPositionStart ? "flex-start" : "flex-end"}>
      <IconButton onClick={handleFirstPage}>
        <FirstPageIcon />
      </IconButton>
      <IconButton>
        <PreviousPageIcon onClick={() => handlePreviousPage(currentPage - 1)} />
      </IconButton>
      <IconButton>
        <NextPageIcon onClick={() => handleNextPage(currentPage + 1)} />
      </IconButton>
      <IconButton>
        <LastPageIcon onClick={handleLastPage} />
      </IconButton>
    </Grid>
  );
};

export default Pagination;
