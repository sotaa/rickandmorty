import { useRouter } from "next/router";
import { FC } from "react";
import {
  Box,
  Grid,
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Character } from "./models";
import { InfoTypography } from "@housing/common";

export const CharacterInfo: FC<{ character: Character }> = ({ character }) => {
  const router = useRouter();

  const { name, gender, species, location, origin, status, type } = character;
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={8}>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 400 }}
            image={character.image}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                mb={3}
                sx={{ fontWeight: "bold" }}
              >
                {character.name}
              </Typography>

              <InfoTypography title="Gender" content={gender} />

              <InfoTypography title="Species" content={species} />

              <InfoTypography title="Status" content={status} />

              <InfoTypography title="Origin" content={origin.name} />

              <InfoTypography title="Location" content={location.name} />

              <InfoTypography title="Type" content={type} />
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid>
        <Button
          onClick={() => router.push("/characters/?name=&page=1")}
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
        >
          Back to List
        </Button>
      </Grid>
    </Grid>
  );
};
