import { React } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import Logo from "../images/logo.svg";
import "../app.css";
import FeaturesMenus from "../atoms/FeaturesMenus";
import CompanyMenu from "../atoms/CompanyMenu";
import DrawerComp from "./DrawerComp";

function Navbar() {
  return (
    <AppBar sx={{ background: "0, 0%, 98%" }}>
      <Toolbar>
        <Box component="img" alt="Your logo" src={Logo} />
        <FeaturesMenus />
        <CompanyMenu />
        <Button textcolor="0, 0%, 41%" component={Link} to="/careers">
          Careers
        </Button>
        <Button textcolor="0, 0%, 41%" component={Link} to="/about">
          About
        </Button>
        <Button sx={{ marginLeft: "auto" }}>Login</Button>
        <Button variant="outlined">Register</Button>
      </Toolbar>
      <DrawerComp/>
    </AppBar>
  );
}

export default Navbar;
