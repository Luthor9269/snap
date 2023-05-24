import { React, useState } from "react";
import { Drawer, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavBar from "./DrawerNavbar";

// List is used here as Menu is intended for transient use(on modals or popups)

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
