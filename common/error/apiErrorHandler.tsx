import { FC } from "react";

import { Stack, Box } from "@mui/material";

import { IApiError } from "@housing/services";

export const ApiErrorHandler: FC<IApiError> = ({ errorData }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Box>{errorData.statusCode}</Box>
      <Box>{errorData.statusText}</Box>
    </Stack>
  );
};
