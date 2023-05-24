import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import FeaturesCollapse from "../atoms/FeaturesCollapse";
import CompanyCollapse from "../atoms/CompanyCollapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function DrawerNavBar() {
  const [featuresOpen, setfeaturesOpen] = useState(false);
  const [companyOpen, setcompanyOpen] = useState(false);
  //Handling click to open collapse menu
  const handleFeaturesClick = () => {
    setfeaturesOpen(!featuresOpen);
  };
  const handleCompanyClick = () => {
    setcompanyOpen(!companyOpen);
  };
  return (
    <div>
      <List>
        <ListItem>
          <ListItemButton onClick={handleFeaturesClick}>
            <ListItemText>Features</ListItemText>
            <ListItemIcon>
              {featuresOpen ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <FeaturesCollapse open={featuresOpen} />
        <ListItem>
          <ListItemButton onClick={handleCompanyClick}>
            <ListItemText>Company </ListItemText>
            <ListItemIcon>
              {companyOpen ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <CompanyCollapse open={companyOpen} />
        <ListItem>
          <ListItemButton>
            <ListItemText>Careers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>Register</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default DrawerNavBar;
