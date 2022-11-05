import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { isEmpty, map } from "lodash";
import { Button, CircularProgress, Container } from "@mui/material";
import {
  CharacterList,
  ICharactersResponse,
  PaginationControlled,
} from "@housing/lib";
import {
  fetchCharactersList,
  ICharactersPage,
  IGetStaticProps,
  useCharactersList,
} from "@housing/services";
import { ApiErrorHandler, EmptyData } from "@housing/common";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const getServerSideProps = async (ctx: IGetStaticProps) => {
  const queries = ctx.query;
  const variables = {
    name: queries.name,
    page: queries.page || 1,
  };

  try {
    if (!variables.name || !variables.page) {
      throw {
        error: {
          response: {
            status: 404,
            statusText: "page not found",
          },
        },
      };
    }

    const data = await fetchCharactersList(variables);

    return { props: { data } };
  } catch (error) {
    return {
      props: {
        error: {
          statusCode: error.response.status,
          statusText: error.response.statusText,
        },
      },
    };
  }
};

export const Characters: FC<ICharactersPage> = ({ data, errorData }) => {
  if (errorData) {
    return <ApiErrorHandler errorData={errorData} />;
  }

  const router = useRouter();
  const queries = router.query;

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
    router.push(`/characters?name=${queries.name}&page=${page}`);
    setPage(page);
  };

  // Handle Api Response Loading
  if (isLoading) return <CircularProgress />;

  // Handle Empty Data
  if (!charactersList || isEmpty(charactersList?.results)) return <EmptyData />;

  return (
    <Container maxWidth="lg" sx={{ height: "100vh", mt: 5, mb: 30 }}>
      <Button
        onClick={() => router.push("/")}
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
      >
        Back to Home
      </Button>
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
