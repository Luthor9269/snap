import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Images to be imported for use in home page
import heroDesktopImage from "../images/image-hero-desktop.png";
import dataBizImage from "../images/client-databiz.svg";
import audiophileImage from "../images/client-audiophile.svg";
import meetImage from "../images/client-meet.svg";
import makerImage from "../images/client-maker.svg";
import heroMobileImage from "../images/image-hero-mobile.png";

function Home() {
  // Creating use theme object to use for queries
  // useMediaQueries checks if screen size is less than "sm"
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* Navbar component created in another file */}
      <Navbar />
      {/* Main Stack houses image and text  */}
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={{ xs: 1, sm: 2 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* Secondary Stack houses Text and bottom links */}
        <Stack
          sx={{
            width: {
              xs: "80%",
              md: "40%",
            },
            justifyItems: "space-around",
          }}
          spacing={4}
        >
          <Typography
            sx={{
              fontSize: "4rem",
              color: theme.palette.primary.main,
              fontWeight: theme.typography.fontWeightRegular,
            }}
          >
            Make Remote Work
          </Typography>
          <Typography
            sx={{
              fontSize: "1.7rem",
              color: theme.palette.primary.light,
              fontWeight: theme.typography.fontWeightLight,
            }}
          >
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "black",
              width: "40%",
              borderRadius: "10px",
              color: theme.palette.secondary.main,
              fontWeight: theme.typography.fontWeightRegular,
            }}
          >
            Learn More
          </Button>
          {/* Last stack houses Link images */}
          <Stack direction="row" justifyContent="space-evenly" spacing={5}>
            <Box component="img" src={dataBizImage} />
            <Box component="img" src={audiophileImage} />
            <Box component="img" src={meetImage} />
            <Box component="img" src={makerImage} />
          </Stack>
        </Stack>
        {/* Rending different images based on useMediaQuery results. If screen size is sm render mobile */}
        {match ? (
          <Box component="img" src={heroMobileImage} sx={{ width: "95%" }} />
        ) : (
          <Box component="img" src={heroDesktopImage} sx={{ width: "450px" }} />
        )}
      </Stack>
    </>
  );
}

export default Home;
