import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { Whatshot, NewReleases, Favorite } from "@mui/icons-material";

const BottomNav = ({ appState }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="New" icon={<NewReleases />} />
        <BottomNavigationAction label="Hot" icon={<Whatshot />} />
        <BottomNavigationAction label="Faves" icon={<Favorite />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
