import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Whatshot, NewReleases, Favorite } from "@mui/icons-material";

const BottomNav = ({ appState }) => {
  const { dispatch } = appState;
  const { isAuthenticated } = useAuth0();

  const handleSortClick = (newSort) =>
    dispatch({ action: "UPDATE_SORT_ORDER", payload: { sortBy: newSort } });

  return (
    <Paper
      variant="outlined"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => handleSortClick("dateAdded")}
          label="New"
          icon={<NewReleases color="primary" />}
        />
        <BottomNavigationAction
          onClick={() => handleSortClick("likes")}
          label="Hot"
          icon={<Whatshot color="primary" />}
        />
        {isAuthenticated ? (
          <BottomNavigationAction
            onClick={() => handleSortClick("favorites")}
            label="Faves"
            icon={<Favorite color="primary" />}
          />
        ) : null}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
