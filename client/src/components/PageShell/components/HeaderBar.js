import React, { useState } from "react";
import { IconButton, AppBar, Toolbar, Input, Typography } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";

import HeaderDrawer from "./HeaderDrawer";

const HeaderBar = ({ appState }) => {
  const { state, dispatch } = appState;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar color="transparent" position="fixed">
        <Toolbar
          sx={{
            maxWidth: "md",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{ mr: 2 }}>
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

      <HeaderDrawer isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

export default HeaderBar;
