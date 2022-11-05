import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { isArray, isEmpty, map } from "lodash";
import { CircularProgress, Container } from "@mui/material";

import { EmptyData, ErrorFallback } from "@housing/common";
import {
  CharacterInfo,
  CharacterList,
  EpisodeList,
  ShowMoreEpisode,
  Episodes,
} from "@housing/lib";
import {
  fetchCharacter,
  ICharacterPage,
  IGetStaticProps,
  useCharacter,
  fetchEpisodes,
} from "@housing/services";

export const getStaticProps = async (ctx: IGetStaticProps) => {
  try {
    const params = ctx.params;
    if (!params || !params.character) {
      throw {
        error: {
          response: {
            status: 404,
            statusText: "page not found",
          },
        },
      };
    }
    const characterId = params.character[0];
    const data = await fetchCharacter(characterId);
    return {
      props: { data },
    };
  } catch (error: any) {
    return {
      props: {
        errorData: {
          statusCode: 500,
          statusText: "",
        },
      },
    };
  }
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { character: ["1"] } }],
  };
}

const EPISODES_COUNT_FOR_EACH_CALL = 6;

export const Character: FC<ICharacterPage> = ({ data, errorData }) => {
  const { query, push } = useRouter();

  if (errorData) {
    return <ErrorFallback error={""} resetErrorBoundary={() => push("./")} />;
  }

  const characterId = isArray(query?.character) ? query.character[0] : "0";
  const [episodeIndexRange, setEpisodeIndexRange] = useState({
    from: 0,
    to: 0,
  });

  const [episodes, setEpisodes] = useState<Episodes>([]);
  const [episodesUrl, setEpisodesUrl] = useState<string[]>([]);

  const {
    data: characterInfo,
    isLoading,
    refetch: refetchCharacterInfo,
  } = useCharacter({
    id: characterId,
    initialData: data,
  });

  useEffect(() => {
    refetchCharacterInfo();
  }, []);

  useEffect(() => {
    if (characterInfo && !isEmpty(characterInfo.episode)) {
      setEpisodeIndexRange({ from: 0, to: EPISODES_COUNT_FOR_EACH_CALL });
    }
  }, [characterInfo]);

  useEffect(() => {
    if (characterInfo && !isEmpty(characterInfo.episode)) {
      setEpisodesUrl(
        characterInfo.episode.slice(
          episodeIndexRange.from,
          episodeIndexRange.to
        )
      );
    }
  }, [episodeIndexRange]);

  useEffect(() => {
    if (!isEmpty(episodesUrl)) {
      fetchEpisodes(episodesUrl).then((res) => {
        setEpisodes([...episodes, ...res]);
      });
    }
  }, [episodesUrl]);

  const handleShowMoreEpisode = () => {
    setEpisodeIndexRange({
      from: episodeIndexRange.to,
      to: episodeIndexRange.to + EPISODES_COUNT_FOR_EACH_CALL,
    });
  };

  //   Handle Api Response Loading
  if (isLoading) return <CircularProgress />;

  //   Handle Empty Data
  if (!characterInfo) return <EmptyData />;

  return (
    <Container maxWidth="lg" sx={{ height: "100vh", mt: 5, mb: 30 }}>
      <CharacterInfo character={characterInfo} />
      <EpisodeList data={episodes} />
      <ShowMoreEpisode onShowMoreEpisode={handleShowMoreEpisode} />
    </Container>
  );
};

export default Character;
