import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Components used for drawer
import FeaturesCollapse from "../atoms/FeaturesCollapse";
import CompanyCollapse from "../atoms/CompanyCollapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function DrawerNavBar() {
  // Two different States for feature and company collapsable list
  const [featuresOpen, setfeaturesOpen] = useState(false);
  const [companyOpen, setcompanyOpen] = useState(false);
  //Toggle features collapse menu
  const handleFeaturesClick = () => {
    setfeaturesOpen(!featuresOpen);
  };
  //Toggle company collapse menu
  const handleCompanyClick = () => {
    setcompanyOpen(!companyOpen);
  };

  return (
    <div>
      {/* Main list housing items */}
      <List>
        {/* Individual Items */}
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
        {/* Feature Collapse component. Passing featuresOpen state as prop */}
        <FeaturesCollapse open={featuresOpen} />
        <ListItem>
          {/* On Click changes state and opens collapseable menu */}
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
