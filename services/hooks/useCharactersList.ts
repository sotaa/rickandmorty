import { useQuery, UseQueryResult } from "react-query";

import { API_URLS } from "@housing/constants";
import { ICharactersResponse } from "@housing/lib";
import { xhrService } from "@housing/services";

export const fetchCharactersList = async ({ name, page }: Variables) => {
  const { data } = await xhrService.get<TData>(
    API_URLS.characters.all(name, page)
  );

  return data;
};

type Variables = { name: string; page: number };
type Args = { name: string; page: number; initialData: ICharactersResponse };
type TData = ICharactersResponse;

export const useCharactersList = ({
  name,
  page,
  initialData,
}: Args): UseQueryResult<TData> => {
  return useQuery({
    queryKey: ["character", page],
    queryFn: () => fetchCharactersList({ name, page }),
    initialData: initialData,
    enabled: false,
  });
};
