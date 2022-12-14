import React from "react";
import { Container, Box } from "@mui/material";

import HeaderBar from "./components/HeaderBar";
import BottomNav from "./components/BottomNav";
import LeftNav from "./components/LeftNav";

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;

  return (
    <>
      <HeaderBar appState={appState} />
      <Box
        sx={{
          height: "95%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LeftNav appState={appState} />
        <Container
          sx={{
            pb: "4rem",
            pt: "1rem",
            position: "relative",
            overflowY: "auto",
          }}
        >
          {children}
        </Container>
      </Box>
      <BottomNav appState={appState} />
    </>
  );
};

export default PageShell;
