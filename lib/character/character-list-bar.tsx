import { useRouter } from "next/router";
import { FC } from "react";

import { Stack, Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ClearFilterProps } from "./models";

export const CharacterListBar: FC<ClearFilterProps> = ({ onClearFilter }) => {
  const router = useRouter();

  const handleClearFilter = () => {
    onClearFilter();
    router.push("/characters/?name=&page=1");
  };
  return (
    <Stack direction="row" alignItems="center">
      <Box sx={{ flexGrow: 1 }}>
        <Button
          onClick={() => router.push("/")}
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
        >
          Back to Home
        </Button>
      </Box>
      <Box sx={{ justifyContent: "flex-end" }}>
        <Button color="error" onClick={handleClearFilter} variant="contained">
          Clear Filter
        </Button>
      </Box>
    </Stack>
  );
};
