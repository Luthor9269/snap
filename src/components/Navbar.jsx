import { React } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Menu, MenuList } from "@mui/material";
import Logo from "../images/logo.svg";
import "../app.css";
import FeaturesMenus from "../atoms/FeaturesMenus";
import CompanyMenu from "../atoms/CompanyMenu";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 64,
          }}
          alt="Your logo"
          src={Logo}
        />
        <FeaturesMenus />
        <CompanyMenu />
        <Menu>
          <MenuList>
            <Link to="/history" className="text-link">
              History
            </Link>
            <Link to="/ourteam" className="text-link">
              Our Team
            </Link>
            <Link to="/blog" className="text-link">
              Blog
            </Link>
          </MenuList>
        </Menu>

        <h2>Careers</h2>
        <h2>About</h2>
        <h2>Login</h2>
        <h2>Register</h2>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
