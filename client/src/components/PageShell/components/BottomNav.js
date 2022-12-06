import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Whatshot, NewReleases, Favorite } from "@mui/icons-material";

const BottomNav = ({ appState }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Paper
      variant="outlined"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="New" icon={<NewReleases />} />
        <BottomNavigationAction label="Hot" icon={<Whatshot />} />
        {isAuthenticated ? (
          <BottomNavigationAction label="Faves" icon={<Favorite />} />
        ) : null}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
