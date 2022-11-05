import { useQuery, UseQueryResult } from "react-query";
import { Character } from "@housing/lib";
import { xhrService } from "@housing/services";
import { API_URLS } from "@housing/constants";
//

type TData = Character;
type Args = { id: string; initialData: Character };

export const fetchCharacter = async (id: string) => {
  const { data } = await xhrService.get<TData>(API_URLS.characters.single(id));

  return data;
};

export const useCharacter = ({
  id,
  initialData,
}: Args): UseQueryResult<TData> => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
    initialData: initialData,
    enabled: false,
  });
};
