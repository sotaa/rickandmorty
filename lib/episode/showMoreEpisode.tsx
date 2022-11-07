import { FC } from "react";

import { Button, Stack } from "@mui/material";
import { IShowMoreEpisodeProps } from "./models";

export const ShowMoreEpisode: FC<IShowMoreEpisodeProps> = ({
  onShowMoreEpisode,
}) => {
  return (
    <Stack direction="row" justifyContent="center">
      <Button
        onClick={onShowMoreEpisode}
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
      >
        Show more Episodes
      </Button>
    </Stack>
  );
};
