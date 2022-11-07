import { FC, Fragment } from "react";

import { IInfoTypographyProps } from "@housing/services";
import { Typography } from "@mui/material";

export const InfoTypography: FC<IInfoTypographyProps> = ({
  title,
  content,
  sx,
}) => {
  return (
    <Fragment>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" component="div">
        {content}
      </Typography>
    </Fragment>
  );
};
