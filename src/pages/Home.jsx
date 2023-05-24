import React from "react";
import Navbar from "../components/Navbar";
import { Box, Stack, Typography, Button } from "@mui/material";
import heroDesktopImage from "../images/image-hero-desktop.png";
import dataBizImage from "../images/client-databiz.svg";
import audiophileImage from "../images/client-audiophile.svg";
import meetImage from "../images/client-meet.svg";
import makerImage from "../images/client-maker.svg";

function Home() {
  return (
    <>
      <Navbar />
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{width:"100vw", height:"100vh"}}
      >
        <Stack sx={{width:"40%"}}>
          <Typography sx={{ fontSize: "4rem" }}>Make Remote Work</Typography>
          <Typography sx={{ fontSize: 30 }}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Typography>
          <Button variant="outlined" sx={{ backgroundColor: "black" }}>
            Learn More
          </Button>
          <Stack direction="row" justifyContent="space-evenly" >
            <Box component="img" src={dataBizImage} />
            <Box component="img" src={audiophileImage} />
            <Box component="img" src={meetImage} />
            <Box component="img" src={makerImage} />
          </Stack>
        </Stack>
        <Box component="img" src={heroDesktopImage} sx={{width:"60%"}} />
      </Stack>
    </>
  );
}

export default Home;
