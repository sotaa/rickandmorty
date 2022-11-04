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

  const [page, setPage] = useState(1);
  const [RequiredList, setRequiredList] = useState([]);

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

  //Prepare Required Number of Characters If CharactersList is not Empty
  useEffect(() => {
    if (charactersList && !isEmpty(charactersList?.results)) {
      let required: any = [];
      map(charactersList.results, (character, index) => {
        if (index < 6) required = [...required, character];
      });

      setRequiredList(required);
    }
  }, [charactersList]);

  const PAGE_SIZE = 5;
  const API_DEFAULT_PAGESIZE = 20;
  // Check out if fetching new block of data is necessary of not
  useEffect(() => {
    const lastItemIndex = page * PAGE_SIZE;
    const apiPageNumber = Math.ceil(lastItemIndex / API_DEFAULT_PAGESIZE);

    if (this.isBufferDeprecated(apiPageNumber, filter)) {
      await this.bufferRequiredData(filter, apiPageNumber);
    }

    const startIndex = ((pageNumber - 1) * pageSize) % API_DEFAULT_PAGESIZE;
    let endIndex = (pageNumber * pageSize) % API_DEFAULT_PAGESIZE;
    endIndex = endIndex === 0 ? API_DEFAULT_PAGESIZE : endIndex;

    const searchResult = this.bufferedData.characters.results.slice(
      startIndex,
      endIndex
    );
  }, [page]);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  // Handle Api Response Loading
  if (isLoading) return <CircularProgress />;

  // Handle Empty Data
  if (!charactersList || isEmpty(charactersList?.results)) return <EmptyData />;

  console.log(charactersList);

  return (
    <Container maxWidth="md" sx={{ height: "100vh", mt: 5 }}>
      <Button
        onClick={() => router.push("/")}
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
      >
        Back to Home
      </Button>
      <CharacterList data={RequiredList} />
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
