import { React } from "react";
import { Collapse, ListItemButton, ListItemText } from "@mui/material";

function CompanyCollapse(props) {
  const { open } = props;

  return (
    <div>
      <Collapse in={open} unmountOnExit>
        <ListItemButton>
          <ListItemText>History</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Our Team</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Blog</ListItemText>
        </ListItemButton>
      </Collapse>
    </div>
  );
}

export default CompanyCollapse;
