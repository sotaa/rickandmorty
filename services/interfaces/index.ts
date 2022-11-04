import { ICharactersResponse } from "@housing/lib";
import { SxProps } from "@mui/material";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export interface IGetStaticProps extends GetStaticProps {
  query: { name: string; page: number };
}

export interface IQueryStrings extends ParsedUrlQuery {
  name: string;
  page: string;
}

export interface IStyleContentProps {
  sx?: SxProps;
}

export interface IErrorFallBack {
  error: any;
  resetErrorBoundary: any;
}

export interface IApiErrorData {
  statusCode: string;
  statusText: string;
}

export interface IApiError {
  errorData: IApiErrorData;
}

export interface ICharactersPage extends IApiError {
  data: ICharactersResponse;
}
