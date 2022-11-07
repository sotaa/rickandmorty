import { Character, ICharactersResponse } from "@housing/lib";
import { SxProps } from "@mui/material";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export interface IGetStaticProps extends GetStaticProps {
  query: { name: string; page: number };
  params: { character: string[] };
}

export interface IQueryStrings extends ParsedUrlQuery {
  name: string;
  page: string;
}

export interface IStyleContentProps {
  sx?: SxProps;
}

export interface IErrorFallBackProps {
  error: any;
  resetErrorBoundary: any;
}

export interface IApiErrorData {
  statusCode: string;
  statusText: string;
}

export interface IApiResponse {
  errorData: IApiErrorData;
}

export interface ICharactersPageProps extends IApiResponse {
  data: ICharactersResponse;
}
export interface ICharacterPageProps extends IApiResponse {
  data: Character;
}

export interface IInfoTypographyProps {
  title: string;
  content: string;
  sx?: SxProps;
}
