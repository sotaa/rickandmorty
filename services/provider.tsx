import { FC } from "react";
import { ReactQueryService } from "./reactQuery/reactQuery";

export const AppProviders: FC<any> = ({ children }) => {
  return <ReactQueryService>{children}</ReactQueryService>;
};
