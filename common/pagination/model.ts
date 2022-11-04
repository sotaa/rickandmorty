import { IStyleContentProps } from "@housing/services";

export interface IPagination extends IStyleContentProps {
  onChangePage: (page: number) => void;
  pages: number;
  page: number;
}
