import { FC } from "react";
import { Container, Button, Typography, Stack, Box, Grid } from "@mui/material";
import { IErrorFallBackProps } from "@housing/services";

export const ErrorFallback: FC<IErrorFallBackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Container maxWidth="md" sx={{ height: "100vh", mt: 5, mb: 30 }}>
      <Grid container mt={20}>
        <Grid item xs={12} mb={5} textAlign="center">
          <Typography variant="h4">Something went wrong!</Typography>
        </Grid>
        <pre>{error.message}</pre>
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            size="large"
            sx={{ fontWeight: "bold" }}
            onClick={resetErrorBoundary}
          >
            Back To Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
