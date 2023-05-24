import { React, useState } from "react";
import { Button, ListItemIcon, Menu, MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../app.css";
import todoLogoIcon from "../images/icon-todo.svg";
import calenderIcon from "../images/icon-calendar.svg"
import remindersIcon from "../images/icon-reminders.svg"
import planningIcon from "../images/icon-planning.svg"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function FeaturesMenus() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        // color="inherit"
        endIcon={open ? <KeyboardArrowUpIcon/>:  <KeyboardArrowDownIcon />}
      >
        Features
      </Button>
      <Menu
        id="features-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "features-button",
        }}
        onClose={handleClose}
      >
        <MenuItem component={Link} to={"/todolist"} >
          <ListItemIcon>
            <Box component="img" src={todoLogoIcon} />
          </ListItemIcon>
          Todo list
        </MenuItem>
        <MenuItem component={Link} to={"/calender"}>
          <ListItemIcon>
            <Box component="img"  src={calenderIcon} />
          </ListItemIcon>
          Calender
        </MenuItem>
        <MenuItem component={Link} to={"/reminders"}>
          <ListItemIcon>
            <Box component="img"  src={remindersIcon} />
          </ListItemIcon>
          Reminders
        </MenuItem>
        <MenuItem component={Link} to={"/planning"}>
          <ListItemIcon>
            <Box component="img" src={planningIcon} />
          </ListItemIcon>
          Planning
        </MenuItem>
      </Menu>
    </>
  );
}

export default FeaturesMenus;