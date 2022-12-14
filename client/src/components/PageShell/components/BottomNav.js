import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Whatshot, NewReleases, Favorite } from "@mui/icons-material";

const BottomNav = ({ appState }) => {
  const { dispatch, state } = appState;
  const { sortBy } = state;
  const { isAuthenticated } = useAuth0();

  const handleSortClick = (newSort) =>
    dispatch({ action: "UPDATE_SORT_ORDER", payload: { sortBy: newSort } });

  return (
    <Paper
      variant="outlined"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
      }}
    >
      <BottomNavigation value={sortBy} showLabels>
        <BottomNavigationAction
          onClick={() => handleSortClick("dateAdded")}
          label="New"
          icon={<NewReleases />}
          value={"dateAdded"}
        />
        <BottomNavigationAction
          onClick={() => handleSortClick("likes")}
          label="Hot"
          icon={<Whatshot />}
          value={"likes"}
        />
        {isAuthenticated ? (
          <BottomNavigationAction
            onClick={() => handleSortClick("favorites")}
            label="Faves"
            icon={<Favorite />}
            value={"favorites"}
          />
        ) : null}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
