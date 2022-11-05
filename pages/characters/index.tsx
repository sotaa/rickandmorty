import { useRouter } from "next/router";
import { FC, useState } from "react";
import { isEmpty } from "lodash";
import { CircularProgress, Container } from "@mui/material";
import { CharacterList } from "@housing/lib";
import {
  fetchCharactersList,
  ICharactersPage,
  IGetStaticProps,
  useCharactersList,
} from "@housing/services";
import {
  EmptyData,
  ErrorFallback,
  PaginationControlled,
} from "@housing/common";
import { CharacterListBar } from "lib/character/character-list-bar";

export const getServerSideProps = async (ctx: IGetStaticProps) => {
  const queries = ctx.query;

  const variables = {
    name: queries.name || "",
    page: queries.page || 1,
  };

  try {
    const data = await fetchCharactersList(variables);
    return { props: { data } };
  } catch (error) {
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

export const Characters: FC<ICharactersPage> = ({ data, errorData }) => {
  const router = useRouter();
  const queries = router.query;

  if (errorData) {
    return (
      <ErrorFallback error={""} resetErrorBoundary={() => router.push("./")} />
    );
  }

  const [page, setPage] = useState(Number(queries.page));

  const {
    data: charactersList,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useCharactersList({
    name: queries.name as string,
    page: Number(queries.page),
    initialData: data,
  });

  const handleChangePage = (page: number) => {
    router.push(`/characters?name=${queries.name || ""}&page=${page}`);
    setPage(page);
  };

  // Handle Api Response Loading
  if (isLoading) return <CircularProgress />;

  // Handle Empty Data
  if (!charactersList || isEmpty(charactersList?.results)) return <EmptyData />;

  return (
    <Container maxWidth="lg" sx={{ height: "100vh", mt: 5, mb: 30 }}>
      <CharacterListBar onClearFilter={() => setPage(1)} />
      <CharacterList data={charactersList?.results} />
      <PaginationControlled
        sx={{ my: 5 }}
        onChangePage={handleChangePage}
        page={page}
        pages={charactersList.info.pages}
      />
    </Container>
  );
};

export default Characters;
