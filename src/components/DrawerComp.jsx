import { React, useState } from "react";
import { Drawer, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavBar from "./DrawerNavbar";

// List is used here as Menu is intended for transient use(on modals or popups)
// Drawer component that is placed in navbar.
// This file handles opening and closing of drawer as well as houses the actual drawer

function DrawerComp() {
  const [openDrawer, setopenDrawer] = useState(false);
  const handleClose = () => {
    setopenDrawer(false);
  };
  const handleButtClick = () => {
    setopenDrawer(!openDrawer);
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={handleClose} anchor="right">
        <List>
          <DrawerNavBar />
        </List>
      </Drawer>
      <IconButton onClick={handleButtClick} sx={{ marginLeft: "auto" }}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
