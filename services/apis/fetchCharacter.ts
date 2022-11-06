import { Character } from "@housing/lib";
import { xhrService } from "@housing/services";
import { API_URLS } from "@housing/constants";
//

type TData = Character;

export const fetchCharacter = async (id: string) => {
  const { data } = await xhrService.get<TData>(API_URLS.characters.single(id));

  return data;
};
