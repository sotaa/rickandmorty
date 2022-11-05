import { useRouter } from "next/router";
import { FC } from "react";
import { isEmpty, map } from "lodash";
import ImageList from "@mui/material/ImageList";

import { useCharactersList } from "@housing/services";

import { CharacterCard } from "./character-card";
import { Characters } from "./models";

export const CharacterList: FC<{ data: Characters }> = ({ data }) => {
  return (
    <ImageList cols={5} gap={20}>
      {map(data, (character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ImageList>
  );
};
