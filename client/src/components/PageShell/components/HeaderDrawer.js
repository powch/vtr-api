import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

const HeaderDrawer = ({ isOpen, handleClose }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Asset request</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => loginWithRedirect()}>
            <ListItemText>Log in</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
