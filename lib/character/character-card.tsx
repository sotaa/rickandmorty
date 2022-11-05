import Image from "next/image";
import { FC } from "react";

import ImageListItem from "@mui/material/ImageListItem";
import { Box, ImageListItemBar } from "@mui/material";

import { Character } from "./models";
import Link from "next/link";

export const CharacterCard: FC<{ character: Character }> = ({ character }) => {
  const { id, name, image, status, species, origin, location } = character;

  return (
    <Link href={`/characters/${id}`}>
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
    </Link>
  );
};
