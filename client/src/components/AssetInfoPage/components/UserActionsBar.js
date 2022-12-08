import React from "react";
import { Grid, IconButton } from "@mui/material";
import { ThumbUp, Favorite, Report } from "@mui/icons-material";

const UserActionsBar = ({ appState }) => {
  const { state, dispatch } = appState;
  const { user, selectedAssetId } = state;
  const { favorites, likes } = user;

  const isAssetLiked = likes.find((id) => id === selectedAssetId);
  const isAssetFavorited = favorites.find(
    (asset) => asset._id === selectedAssetId
  );

  const handleUpdateClick = (category) => {
    const updateUserAndAssetData = (payload) => {
      category === "likes"
        ? dispatch({ action: "UPDATE_LIKES" })
        : dispatch({ action: "UPDATE_USER_ASSET_DATA", payload });
    };

    const handleError = (payload) => dispatch({ action: "ERROR", payload });

    fetch(`/api/data/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        category,
        assetId: selectedAssetId,
      }),
    })
      .then((res) => res.json())
      .then((res) => updateUserAndAssetData(res))
      .catch((err) => handleError(err));
  };

  return (
    <>
      <Grid item xs={5}>
        <IconButton
          color={isAssetFavorited ? "primary" : "inherit"}
          sx={{ paddingLeft: 0 }}
          onClick={() => handleUpdateClick("favorites")}
        >
          <Favorite />
        </IconButton>
        <IconButton
          color={isAssetLiked ? "primary" : "inherit"}
          onClick={() => handleUpdateClick("likes")}
        >
          <ThumbUp />
        </IconButton>
      </Grid>
      <Grid item xs></Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton sx={{ pr: 0 }}>
          <Report />
        </IconButton>
      </Grid>
    </>
  );
};

export default UserActionsBar;
