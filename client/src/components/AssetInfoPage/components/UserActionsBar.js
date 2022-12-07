import React from "react";
import { Grid, IconButton } from "@mui/material";
import { ThumbUp, Favorite, Report } from "@mui/icons-material";

const UserActionsBar = () => (
  <>
    <Grid item xs={5}>
      <IconButton sx={{ paddingLeft: 0 }}>
        <ThumbUp />
      </IconButton>
      <IconButton>
        <Favorite />
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

export default UserActionsBar;
