import { React } from "react";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  Box,
  ListItemText,
} from "@mui/material";
import todoLogoIcon from "../images/icon-todo.svg";
import calenderIcon from "../images/icon-calendar.svg";
import remindersIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";

function FeaturesCollapse(props) {
  const { open } = props;
  // Needed featuresOpen prop as it is required by Collapse api to run in another File
  // Therefore I used it as a prop

  return (
    <div>
      <Collapse in={open} unmountOnExit>
        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={todoLogoIcon} />
          </ListItemIcon>
          <ListItemText>Todo List</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={calenderIcon} />
          </ListItemIcon>
          <ListItemText>Calender</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={remindersIcon} />
          </ListItemIcon>
          <ListItemText>Reminders</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Box component="img" src={planningIcon} />
          </ListItemIcon>
          <ListItemText>Planning</ListItemText>
        </ListItemButton>
      </Collapse>
    </div>
  );
}

export default FeaturesCollapse;
