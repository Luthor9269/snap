import { React, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function CompanyMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="company-button"
        onClick={handleClick}
        aria-control={open ? "company-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        Company
      </Button>
      <Menu
        id="company-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "company-button",
        }}
        onClose={handleClose}
      >
        <MenuItem component={Link} to={"/history"}>
          History
        </MenuItem>
        <MenuItem component={Link} to={"/ourteam"}>
          Our Team
        </MenuItem>
        <MenuItem component={Link} to={"/blog"}>
          Blog
        </MenuItem>
      </Menu>
    </div>
  );
}

export default CompanyMenu;
