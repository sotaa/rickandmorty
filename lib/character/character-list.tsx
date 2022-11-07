import { FC } from "react";
import { map } from "lodash";
import ImageList from "@mui/material/ImageList";

import { CharacterCard } from "./character-card";
import { CharactersListProps } from "./models";

export const CharacterList: FC<{ data: CharactersListProps }> = ({ data }) => {
  return (
    <ImageList cols={5} gap={20}>
      {map(data, (character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ImageList>
  );
};
