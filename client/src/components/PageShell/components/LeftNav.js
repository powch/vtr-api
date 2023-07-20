import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Whatshot, NewReleases, Favorite } from "@mui/icons-material";

const LeftNav = ({ appState }) => {
  const { state, dispatch } = appState;
  const { sortBy, user } = state;

  const handleSortClick = (newSort) =>
    dispatch({ action: "UPDATE_SORT_ORDER", payload: { sortBy: newSort } });

  return (
    <List
      sx={{
        display: { xs: "none", md: "block" },
        position: "sticky",
        top: 0,
        left: 0,
        borderRight: "0.063rem solid rgb(0,0,0,0.26)",
      }}
    >
      <ListItem>
        <ListItemButton
          selected={sortBy === "dateAdded"}
          onClick={() => handleSortClick("dateAdded")}
        >
          <ListItemIcon>
            <NewReleases
              {...(sortBy === "dateAdded" ? { color: "primary" } : {})}
            />
          </ListItemIcon>
          <ListItemText primary={"New"} />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton
          selected={sortBy === "likes"}
          onClick={() => handleSortClick("likes")}
        >
          <ListItemIcon>
            <Whatshot {...(sortBy === "likes" ? { color: "primary" } : {})} />
          </ListItemIcon>
          <ListItemText primary={"Hot"} />
        </ListItemButton>
      </ListItem>

      {user ? (
        <ListItem>
          <ListItemButton
            selected={sortBy === "favorites"}
            onClick={() => handleSortClick("favorites")}
          >
            <ListItemIcon>
              <Favorite
                {...(sortBy === "favorites" ? { color: "primary" } : {})}
              />
            </ListItemIcon>
            <ListItemText primary={"Favorites"} />
          </ListItemButton>
        </ListItem>
      ) : null}
    </List>
  );
};

export default LeftNav;
