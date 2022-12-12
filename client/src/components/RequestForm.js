import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { Publish } from "@mui/icons-material";

import SlideModal from "./SlideModal";
import { ASSET_LIST, REQUEST_FORM } from "../constants";

const RequestForm = ({ appState }) => {
  const { dispatch, state } = appState;
  const { currentPage } = state;

  const handleClose = () =>
    dispatch({ action: "CHANGE_PAGE", payload: ASSET_LIST });

  return (
    <SlideModal
      mounted={currentPage === REQUEST_FORM}
      appState={appState}
      handleClose={handleClose}
    >
      <Grid item xs={6}>
        <Typography variant="subtitle1" fontWeight={"bold"} fontSize={"1rem"}>
          Request form
        </Typography>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography variant="subtitle2" fontSize={"0.75rem"}>
          Got an asset you want to see in the list? Request it here to share it
          with everyone!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label={"Asset URL"}
          variant="outlined"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label={"Asset name"}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label={"Asset description"}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          label={"Image URL"}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          sx={{ mt: "2rem" }}
          startIcon={<Publish />}
        >
          Submit
        </Button>
      </Grid>
    </SlideModal>
  );
};

export default RequestForm;
