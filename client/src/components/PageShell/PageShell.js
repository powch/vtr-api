import React from "react";
import { Container, Box } from "@mui/material";

import HeaderBar from "./components/HeaderBar";
import BottomNav from "./components/BottomNav";
import LeftNav from "./components/LeftNav";
import LoadingSkeleton from "./components/LoadingSkeleton";

const PageShell = ({ appState, children }) => {
  const { state } = appState;
  const { currentPage } = state;

  const loading = currentPage.includes("loading");

  return (
    <>
      <HeaderBar appState={appState} />
      <Box
        sx={{
          height: { xs: "90%", sm: "95%" },
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
          {!loading ? children : <LoadingSkeleton />}
        </Container>
      </Box>
      <BottomNav appState={appState} />
    </>
  );
};

export default PageShell;
