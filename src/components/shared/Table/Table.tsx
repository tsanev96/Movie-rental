import { useState } from 'react'
import { Table as TableMUI, TableContainer } from "@mui/material";
import { Column } from "../../../types/Column";
import TableHeader from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../Pagination/Pagination";

interface Props<T> {
  data: T[];
  columns: Column[];
}

const Table = <T extends object>({ data, columns }: Props<T>) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <TableContainer>
      <TableMUI>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </TableMUI>
      <Pagination currentPage={page} onPageChange={handlePageChange} pages={3} />
    </TableContainer>
  );
};

export default Table;
