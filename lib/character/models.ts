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

export type ReferenceEntity = {
  name: string;
  url: string;
};

export type CharactersListProps = Character[];

export type ClearFilterProps = {
  onClearFilter: VoidFunction;
};
export interface ICharactersResponse {
  info: {
    count: number;
    next: string;
    pages: number;
  };
  results: CharactersListProps;
}
