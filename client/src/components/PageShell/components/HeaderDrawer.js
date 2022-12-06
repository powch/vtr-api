import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Login, Logout, Person, Add } from "@mui/icons-material";

const HeaderDrawer = ({ isOpen, handleClose }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <List>
        {isAuthenticated ? (
          <>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText>Asset request</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ) : null}
        <ListItem>
          <ListItemButton
            onClick={
              isAuthenticated ? () => logout() : () => loginWithRedirect()
            }
          >
            <ListItemIcon>
              {isAuthenticated ? <Logout /> : <Login />}
            </ListItemIcon>
            <ListItemText>
              {isAuthenticated ? "Log out" : "Log in"}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {!isAuthenticated ? <Divider /> : null}
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
