import React from "react";
import { Container, Box, Skeleton, Stack, Paper } from "@mui/material";

import HeaderBar from "./components/HeaderBar";
import BottomNav from "./components/BottomNav";
import LeftNav from "./components/LeftNav";

const LoadingSkeleton = () => (
  <Box
    sx={{
      marginTop: "0.5rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      flexWrap: "wrap",
    }}
  >
    {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(() => (
      <Paper sx={{ mb: 3, px: 1, pb: 1 }}>
        <Stack spacing={2}>
          <Skeleton
            sx={{ width: { xs: 300, sm: 250 }, height: 150 }}
            variant="rounded"
          />
          <Skeleton variant="string" width={250} />
          <Skeleton variant="string" width={200} />
        </Stack>
      </Paper>
    ))}
  </Box>
);

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;
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
