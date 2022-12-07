import React from "react";
import { Grid, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const CloseActionBar = ({ handleClose }) => (
  <>
    <Grid item xs></Grid>
    <Grid
      item
      xs={2}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mb: "1rem",
      }}
    >
      <IconButton
        sx={{ pr: 0 }}
        onClick={handleClose}
      >
        <Close color="primary" />
      </IconButton>
    </Grid>
  </>
);

export default CloseActionBar;
