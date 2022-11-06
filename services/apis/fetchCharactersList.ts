import { API_URLS } from "@housing/constants";
import { ICharactersResponse } from "@housing/lib";
import { xhrService } from "@housing/services";
//

type Variables = { name: string; page: number };
type TData = ICharactersResponse;

export const fetchCharactersList = async ({ name, page }: Variables) => {
  const { data } = await xhrService.get<TData>(
    API_URLS.characters.all(name, page)
  );

  return data;
};
