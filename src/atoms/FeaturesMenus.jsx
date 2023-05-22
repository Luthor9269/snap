import { React, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "../app.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function FeaturesMenus() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="features-button"
        onClick={handleClick}
        aria-control={open ? "features-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        endIcon={open ? <KeyboardArrowUpIcon/>:  <KeyboardArrowDownIcon />}
      >
        Features
      </Button>
      <Menu
        id="features-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "resources-button",
        }}
        onClose={handleClose}
      >
        <MenuItem component={Link} to={"/todolist"}>
          Todo list
        </MenuItem>
        <MenuItem component={Link} to={"/calender"}>
          Calender
        </MenuItem>
        <MenuItem component={Link} to={"/reminders"}>
          Reminders
        </MenuItem>
        <MenuItem component={Link} to={"/planning"}>
          Planning
        </MenuItem>
      </Menu>
    </>
  );
}

export default FeaturesMenus;