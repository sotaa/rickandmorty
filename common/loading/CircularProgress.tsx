import { CircularProgress, Stack } from "@mui/material";

export const LoadingCircularProgress = () => {
  return (
    <Stack direction="row" mt={20} spacing={2} justifyContent="center">
      <CircularProgress />
    </Stack>
  );
};
