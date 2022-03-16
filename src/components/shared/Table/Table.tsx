import { useState } from "react";
import { Table as TableMUI, TableContainer, TableFooter } from "@mui/material";
import { Column } from "../../../types/Column";
import TableHeader from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../Pagination/Pagination";
import { paginate } from "../../../utils/paginate";

interface ITable<T> {
  data: T[];
  columns: Column[];
  rowsPerPage: number;
}

const Table = <T extends object>({ data, columns, rowsPerPage }: ITable<T>) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage: number) => setPage(newPage);

  const pages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = paginate(data, rowsPerPage, page);

  return (
    <TableContainer>
      <TableMUI>
        <TableHeader columns={columns} />
        <TableBody data={paginatedData} columns={columns} />
      </TableMUI>
      <Pagination
        currentPage={page}
        onPageChange={handlePageChange}
        pages={pages}
      />
    </TableContainer>
  );
};

export default Table;
