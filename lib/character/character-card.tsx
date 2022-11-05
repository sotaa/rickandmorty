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
        width={214}
        height={214}
        style={{ objectFit: "contain" }}
      />

      <ImageListItemBar
        title={name}
        subtitle={
          <Box sx={{ fontWeight: "bold" }}>
            <Box my={1}>Status:{status}</Box>
            <Box mb={1}>Species: {species}</Box>
            <Box mb={1}>Origin: {origin.name}</Box>
            <Box>Location: {location.name}</Box>
          </Box>
        }
      />
    </ImageListItem>
  );
};
