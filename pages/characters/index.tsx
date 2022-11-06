import { useRouter } from "next/router";
import { FC, useState } from "react";
import { isEmpty } from "lodash";
import { Container } from "@mui/material";
import { CharacterList } from "@housing/lib";
import {
  fetchCharactersList,
  ICharactersPage,
  IGetStaticProps,
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

  const handleChangePage = (page: number) => {
    router.push(`/characters?name=${queries.name || ""}&page=${page}`);
    setPage(page);
  };

  // Handle Empty Data
  if (!data || isEmpty(data?.results)) return <EmptyData />;

  return (
    <Container maxWidth="lg" sx={{ height: "100vh", mt: 5, mb: 30 }}>
      <CharacterListBar onClearFilter={() => setPage(1)} />
      <CharacterList data={data?.results} />
      <PaginationControlled
        sx={{ my: 5 }}
        onChangePage={handleChangePage}
        page={page}
        pages={data.info.pages}
      />
    </Container>
  );
};

export default Characters;
