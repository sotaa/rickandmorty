export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};
export type Episodes = Episode[];

export type EpisodesListProps = { data: Episodes };
export interface IShowMoreEpisodeProps {
  onShowMoreEpisode: VoidFunction;
}
