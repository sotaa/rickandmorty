import Image from "next/image";
import { FC } from "react";

import ImageListItem from "@mui/material/ImageListItem";
import { Box, ImageListItemBar, Stack } from "@mui/material";

import { Character } from "./models";

export const CharacterCard: FC<{ character: Character }> = ({ character }) => {
  const { name, image, status, species, origin, location } = character;

  return (
    <ImageListItem sx={{ backgroundColor: "#f6f6f6" }}>
      <Image
        src={`${image}`}
        alt={name}
        width={270}
        height={270}
        style={{ objectFit: "contain" }}
      />

      <ImageListItemBar
        title={name}
        subtitle={
          <Box sx={{ fontWeight: "bold" }}>
            <Stack direction="row" my={1}>
              <Box sx={{ flexGrow: 1 }}>Status:{status}</Box>
              <Box sx={{ justifyContent: "flex-end" }}>Species: {species}</Box>
            </Stack>
            <Box mb={1}>Origin: {origin.name}</Box>
            <Box>Location: {location.name}</Box>
          </Box>
        }
      />
    </ImageListItem>
  );
};
