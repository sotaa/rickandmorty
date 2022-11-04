export type Character = {
  /** The id of the character. */
  id: number;
  /** The name of the character. */
  name: string;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: string;
  /** The species of the character. */
  species: string;
  /** Name and link to the character's origin location. */
  origin: ReferenceEntity;
  /**  Name and link to the character's last known location endpoint. */
  location: ReferenceEntity;
  /** (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */
  image: string;
  /** List of episodes in which this character appeared. */
  episode: string[];
  /** (url)	Link to the character's own URL endpoint. */
  url: string;
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
