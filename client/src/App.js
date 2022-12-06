// External imports
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";
import { Box } from "@mui/material";

import { ASSET_LIST, ASSET_LIST_LOADING } from "./constants";
import PageShell from "./components/PageShell";
import AssetList from "./components/AssetList";

import GetAssetData from "./rest/GetAssetData";

const App = ({ appState }) => {
  const { isLoading, isAuthenticated, getAccessTokenSilently, user } =
    useAuth0();
  const { state, dispatch } = appState;
  const { currentPage, assetList } = state;

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        const permissions = jwt_decode(token).permissions;
        dispatch({
          action: "SEED_USER_DATA",
          payload: { user, permissions, currentPage },
        });
      });
    }

    if (!isLoading && !user && !isAuthenticated) {
      dispatch({ action: "CHANGE_PAGE", payload: ASSET_LIST_LOADING });
    }
  }, [isLoading, isAuthenticated]);

  return (
    <>
      <PageShell appState={appState}>
        <AssetList appState={appState} />
      </PageShell>
      {currentPage === ASSET_LIST_LOADING ? (
        <GetAssetData
          state={state}
          onData={(payload) => dispatch({ action: "SEED_ASSET_DATA", payload })}
          onError={(payload) => dispatch({ action: "ERROR", payload })}
        />
      ) : null}
    </>
  );
};

export default App;
