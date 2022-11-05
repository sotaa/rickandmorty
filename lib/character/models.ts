import { SxProps } from "@mui/material";
import { OverridableTypeMap } from "@mui/material/OverridableComponent";

export type Character = {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  origin: ReferenceEntity;
  location: ReferenceEntity;
  image: string;
  episode: string[];
  url: string;
  type: string;
};

export type Characters = Character[];

export type ReferenceEntity = {
  name: string;
  url: string;
};

export interface ICharactersResponse {
  info: {
    count: number;
    next: string;
    pages: number;
  };
  results: Characters;
}

export type ClearFilter = {
  onClearFilter: VoidFunction;
};
