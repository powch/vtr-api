// External imports
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";
import { Box } from "@mui/material";

import PageShell from "./components/PageShell";
import AssetCard from "./components/AssetCard";

const App = ({ appState }) => {
  const { isLoading, isAuthenticated, getAccessTokenSilently, user } =
    useAuth0();
  const { state, dispatch } = appState;
  const { currentPage } = state;

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        const permissions = jwt_decode(token).permissions;
        dispatch({ action: "SEED_USER_DATA", payload: { user, permissions } });
      });
    }
  }, [isLoading, isAuthenticated]);

  const loading = currentPage.includes("loading");

  return (
    <PageShell appState={appState}>
      <Box
        sx={{
          marginTop: "0.5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap"
        }}
      >
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
      </Box>
    </PageShell>
  );
};

export default App;
