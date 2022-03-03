import _ from "lodash";
import { TableBody as TableBodyMui, TableCell, TableRow } from "@mui/material";
import { Column } from "../../../types/Column";

interface Props<T> {
  data: T[];
  columns: Column[];
}

const TableBody = <T extends object>({ data, columns }: Props<T>) => {
  const getCellValue = (path: string, item: T) => {
    const value = _.get(item, path);
    return value ? value : "";
  };

  return (
    <TableBodyMui>
      {data.map((el) => {
        return (
          <TableRow>
            {columns.map(({ path }) => (
              <TableCell key={path}>{getCellValue(path, el)}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBodyMui>
  );
};

export default TableBody;
