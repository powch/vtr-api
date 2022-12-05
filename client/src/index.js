import React, { useReducer } from "react";
import ReactDom from "react-dom";
import App from "./App";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";

import { authDomain, authClientId, authAudience } from "./constants";
import { theme } from "./theme";
import { reducer, initialState } from "./App.reducer";

const AppProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Auth0Provider
      domain={authDomain}
      clientId={authClientId}
      audience={authAudience}
      redirectUri={window.location.origin}
    >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App appState={{ state, dispatch }} />
      </ThemeProvider>
    </Auth0Provider>
  );
};

ReactDom.render(<AppProvider />, document.getElementById("app"));
