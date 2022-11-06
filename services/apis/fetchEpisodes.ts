import { xhrService } from "@housing/services";
import { Episode } from "lib/episode/models";
//

type TData = Episode;

export const fetchEpisodes = async (urls: string[]) => {
  return Promise.all(
    urls.map((url) => xhrService.get<TData>(url).then((res) => res.data))
  );
};
