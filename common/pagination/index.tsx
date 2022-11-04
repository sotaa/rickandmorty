import { FC, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { IPagination } from "./model";

export const PaginationControlled: FC<IPagination> = ({
  sx,
  onChangePage,
  page,
  pages,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ ...sx }}>
      <Pagination
        shape="rounded"
        variant="outlined"
        count={pages}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};
