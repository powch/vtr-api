import React from "react";
import { Container } from "@mui/material";

import HeaderBar from "./components/HeaderBar";
import BottomNav from "./components/BottomNav";

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;

  return (
    <>
      <HeaderBar appState={appState} />
      <Container sx={{ pb: "4rem", pt: "1rem", position: "relative" }}>
        {children}
      </Container>
      <BottomNav appState={appState} />
    </>
  );
};

export default PageShell;
