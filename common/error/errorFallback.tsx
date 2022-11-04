import { FC } from "react";
import { Button, Typography } from "@mui/material";
import { IErrorFallBack } from "@housing/services";

export const ErrorFallback: FC<IErrorFallBack> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <Typography variant="h3">Something went wrong:</Typography>
      <pre>{error.message}</pre>
      <Button variant="contained" size="large" onClick={resetErrorBoundary}>
        Back To Home
      </Button>
    </div>
  );
};
