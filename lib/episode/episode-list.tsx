import { FC } from "react";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import { map } from "lodash";
import { InfoTypography } from "@housing/common";
import { EpisodesList } from "./models";

export const EpisodeList: FC<EpisodesList> = ({ data }) => {
  return (
    <Grid container spacing={3} mt={4}>
      {data &&
        map(data, (item) => {
          const { name, air_date, episode, id } = item;

          return (
            <Grid item xs={4} key={id}>
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h6"
                    mb={3}
                    sx={{ fontWeight: "bold" }}
                  >
                    {name}
                  </Typography>

                  <InfoTypography title="Air Date" content={air_date} />

                  <InfoTypography title="Episode" content={episode} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};
