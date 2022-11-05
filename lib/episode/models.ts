export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};
export type Episodes = Episode[];

export interface IShowMoreEpisode {
  onShowMoreEpisode: VoidFunction;
}

export type EpisodesList = { data: Episodes };
