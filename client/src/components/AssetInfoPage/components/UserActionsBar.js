import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { ThumbUp, Favorite, Report } from "@mui/icons-material";

const UserActionsBar = ({ appState }) => {
  const { state, dispatch } = appState;
  const { user, selectedAssetId, assetList } = state;
  const { favorites, likes: userLikes } = user;
  const selectedAsset = assetList.find(
    (asset) => asset._id === selectedAssetId
  );
  const { likes: assetLikes } = selectedAsset;

  const isAssetLiked = userLikes.find((id) => id === selectedAssetId);
  const isAssetFavorited = favorites.find(
    (asset) => asset._id === selectedAssetId
  );

  const handleUpdateClick = (category) => {
    const updateUserAndAssetData = (payload) => {
      category === "likes"
        ? dispatch({ action: "UPDATE_LIKES", payload: { isAssetLiked } })
        : dispatch({
            action: "UPDATE_USER_ASSET_DATA",
            payload,
          });
    };

    const handleError = (payload) => dispatch({ action: "ERROR", payload });

    fetch(`/api/data/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        updateAction:
          (isAssetFavorited && category === "favorites") ||
          (isAssetLiked && category === "likes")
            ? "remove"
            : "add",
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
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "primary",
        }}
      >
        <IconButton
          color={isAssetFavorited ? "primary" : "disabled"}
          onClick={() => handleUpdateClick("favorites")}
        >
          <Favorite />
        </IconButton>
        <IconButton
          color={isAssetLiked ? "primary" : "disabled"}
          onClick={() => handleUpdateClick("likes")}
        >
          <ThumbUp />
        </IconButton>
        {assetLikes > 0 ? (
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ color: "#30475E" }}
          >{`(${assetLikes})`}</Typography>
        ) : null}
      </Grid>
      <Grid item xs></Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton color={"disabled"}>
          <Report />
        </IconButton>
      </Grid>
    </>
  );
};

export default UserActionsBar;
