import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Slide,
  Grid,
  Button,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { Close, OpenInNew } from "@mui/icons-material";

import CloseActionBar from "./components/CloseActionBar";
import ArtistActionBar from "./components/ArtistActionBar";
import UserActionsBar from "./components/UserActionsBar";

const AssetInfoPage = ({ appState }) => {
  const { state, dispatch } = appState;
  const { selectedAssetId, assetList } = state;
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

  return (
    <Slide
      in={selectedAssetId ? true : false}
      direction="left"
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1000,
          backgroundColor: "#fff",
          padding: "4rem 2rem",
          maxWidth: "md",
          mx: "auto",
        }}
      >
        <Grid container justifyContent={"center"} alignItems={"flex-start"}>
          <CloseActionBar
            handleClose={() =>
              dispatch({ action: "SELECT_ASSET_TO_VIEW", payload: null })
            }
          />
          <ArtistActionBar artist={artist} artistLink={artistLink} />
          <Grid
            item
            xs={12}
            sx={{ ...(!isAuthenticated ? { mb: "0.5rem" } : {}) }}
          >
            <img
              src={imageUrl}
              width="100%"
              style={{ borderRadius: "0.25rem" }}
            />
          </Grid>

          {isAuthenticated ? <UserActionsBar /> : null}
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
              endIcon={<OpenInNew />}
              href={link}
              target={"_blank"}
              rel="noopener"
            >
              Go to asset
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Slide>
  );
};

export default AssetInfoPage;
