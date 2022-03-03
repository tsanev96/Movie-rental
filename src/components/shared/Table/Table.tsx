import { Table as TableMUI, TableContainer } from "@mui/material";
import { Column } from "../../../types/Column";
import TableHeader from "./TableHead";
import TableBody from "./TableBody";

interface Props<T> {
  data: T[];
  columns: Column[];
}

const Table = <T extends object>({ data, columns }: Props<T>) => {
  return (
    <TableContainer>
      <TableMUI>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </TableMUI>
    </TableContainer>
  );
};

export default Table;
