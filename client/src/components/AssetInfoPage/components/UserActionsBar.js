import React from "react";
import { Grid, IconButton } from "@mui/material";
import { ThumbUp, Favorite, Report } from "@mui/icons-material";

const UserActionsBar = ({ appState }) => {
  // GET ASSETID AND USERID OUT OF STATE FOR THE GET CALL

  const handleUpdateClick = (category) => {
    fetch(`/api/data/${userId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: {
        [category]: assetId,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid item xs={5}>
        <IconButton sx={{ paddingLeft: 0 }}>
          <Favorite />
        </IconButton>
        <IconButton onClick={() => handleUpdateClick("likes")}>
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
