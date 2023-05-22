import React from "react";
import { Button } from "@mui/material";

function Buttons(props) {
  return (
    <Button
      id={props.id}
      onClick={handleClick}
      aria-control={open ? {props.ariaControl} : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      color="inherit"
      endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    ></Button>
  );
}

export default Buttons;
