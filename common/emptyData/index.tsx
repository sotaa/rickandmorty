import { Typography, Stack } from "@mui/material";
import { FC } from "react";

export const EmptyData: FC = () => {
  return (
    <Stack direction="row" mt={20} spacing={2} justifyContent="center">
      <Typography variant="h3">There is no Data!</Typography>
    </Stack>
  );
};
