// External imports
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";
import { Box } from "@mui/material";

import { ASSET_LIST_LOADING, ASSET_LIST_UPDATE_SORT_ORDER } from "./constants";
import PageShell from "./components/PageShell";
import AssetList from "./components/AssetList";
import AssetInfoPage from "./components/AssetInfoPage";
import RequestForm from "./components/RequestForm";

import GetAssetData from "./rest/GetAssetData";
import GetSortedAssetData from "./rest/GetSortedAssetData";

const App = ({ appState }) => {
  const { isLoading, isAuthenticated, getAccessTokenSilently, user } =
    useAuth0();
  const { state, dispatch } = appState;
  const { currentPage } = state;

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
    <Box
      sx={{
        height: "100vh",
        maxHeight: "100vh",
        width: "100%",
        position: "relative",
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      <PageShell appState={appState}>
        <AssetList appState={appState} />
      </PageShell>
      <AssetInfoPage appState={appState} />
      <RequestForm appState={appState} />
      {currentPage === ASSET_LIST_LOADING ? (
        <GetAssetData
          state={state}
          onData={(payload) =>
            dispatch({
              action: "SEED_ASSET_DATA",
              payload: { ...payload, isAuthenticated },
            })
          }
          onError={(payload) => dispatch({ action: "ERROR", payload })}
        />
      ) : null}
      {currentPage === ASSET_LIST_UPDATE_SORT_ORDER ? (
        <GetSortedAssetData
          state={state}
          onData={(payload) =>
            dispatch({
              action: "SORT_ORDER_UPDATED",
              payload,
            })
          }
          onError={(payload) => dispatch({ action: "ERROR", payload })}
        />
      ) : null}
    </Box>
  );
};

export default App;
