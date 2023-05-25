import { React } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Logo from "../images/logo.svg";
import "../app.css";
// Components created to go in Navbar
import FeaturesMenus from "../atoms/FeaturesMenus";
import CompanyMenu from "../atoms/CompanyMenu";
// DrawerComp a hidden component that renders when screen size is sm, based on useMediaQuery
import DrawerComp from "./DrawerComp";

function Navbar() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      sx={{ background: "0, 0%, 98%" }}
      style={{ position: "static" }}
      elevation={0}
    >
      <Toolbar>
        <Box component="img" alt="Your logo" src={Logo} />
        {/* Conditional Rendering */}
        {match ? (
          <DrawerComp />
        ) : (
          <>
            <FeaturesMenus />
            <CompanyMenu />
            <Button component={Link} to="/careers">
              Careers
            </Button>
            <Button textcolor="0, 0%, 41%" component={Link} to="/about">
              About
            </Button>
            <Button sx={{ marginLeft: "auto" }}>Login</Button>
            <Button variant="outlined">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
