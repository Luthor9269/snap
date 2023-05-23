/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


//////////////Trying to create reusable buttons. Will have to try again as the props were not registering


function ReusableButton(props) {
  const {ariaControl, id, name, anchorEl, setAnchorEl } = props
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Button
      id={id}
      onClick={handleClick}
      aria-control={open ? {ariaControl} : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      color="inherit"
      endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    >{name}</Button>
  );
}

export default ReusableButton;
