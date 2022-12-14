import React, { useState } from "react";
import { IconButton, AppBar, Toolbar, Input, Typography } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";

import { REQUEST_FORM } from "../../../constants";
import HeaderDrawer from "./HeaderDrawer";

const HeaderBar = ({ appState }) => {
  const { state, dispatch } = appState;
  const { user } = state;
  const [isOpen, setIsOpen] = useState(false);

  const handleRequestClick = () => {
    dispatch({ action: "CHANGE_PAGE", payload: REQUEST_FORM });
    setIsOpen(false);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#fff" }} position="fixed">
        <Toolbar
          sx={{
            maxWidth: "lg",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{ mr: 2, color: "#30475E" }}>
            VTA
          </Typography>
          <Input
            fullWidth
            margin="dense"
            placeholder="Search"
            startAdornment={<SearchIcon />}
          />
          <IconButton onClick={() => setIsOpen(true)} sx={{ ml: 2 }}>
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <HeaderDrawer
        isOpen={isOpen}
        isUserAdmin={user?.role === "admin"}
        handleClose={() => setIsOpen(false)}
        handleRequestClick={handleRequestClick}
      />
    </>
  );
};

export default HeaderBar;
