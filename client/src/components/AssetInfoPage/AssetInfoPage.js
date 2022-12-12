import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Button, Typography, Paper } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

import { ASSET_LIST, ASSET_INFO } from "../../constants";
import ArtistActionBar from "./components/ArtistActionBar";
import UserActionsBar from "./components/UserActionsBar";
import SlideModal from "../SlideModal";

const AssetInfoPage = ({ appState }) => {
  const { state, dispatch } = appState;
  const { selectedAssetId, assetList, currentPage } = state;
  const { isAuthenticated } = useAuth0();

  const selectedAsset =
    assetList.find((asset) => asset._id === selectedAssetId) || {};

  const {
    name,
    description,
    link,
    image: imageUrl,
    artist,
    artistLink,
    price,
  } = selectedAsset;

  const handleClose = () =>
    dispatch({ action: "CHANGE_PAGE", payload: ASSET_LIST });

  return (
    <SlideModal
      appState={appState}
      mounted={currentPage === ASSET_INFO}
      handleClose={handleClose}
    >
      <ArtistActionBar artist={artist} artistLink={artistLink} />
      <Grid item xs={12} sx={{ ...(!isAuthenticated ? { mb: "0.5rem" } : {}) }}>
        <img
          src={imageUrl}
          width="100%"
          style={{ borderRadius: "0.25rem" }}
        />
      </Grid>

      {isAuthenticated ? <UserActionsBar appState={appState} /> : null}
      <Grid
        item
        xs={12}
        sx={{ mb: "0.5rem", ...(isAuthenticated ? { mt: "1rem" } : {}) }}
      >
        <Typography variant="h6" lineHeight={1} fontWeight="bold">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} mb={"3rem"}>
        <Typography variant="subtitle2" lineHeight={1}>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          startIcon={<OpenInNew />}
          href={link}
          target={"_blank"}
          rel="noopener"
        >
          Go to asset
        </Button>
      </Grid>
    </SlideModal>
  );
};

export default AssetInfoPage;
