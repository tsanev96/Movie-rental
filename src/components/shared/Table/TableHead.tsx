import { TableCell, TableHead as TableHeadMui, TableRow } from "@mui/material";
import { Column } from "../../../types/Column";

interface Props {
  columns: Column[];
}

const TableHead = ({ columns }: Props) => {
  return (
    <TableHeadMui>
      <TableRow>
        {columns.map(({ path, name }) => (
          <TableCell key={path}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
};

export default TableHead;
