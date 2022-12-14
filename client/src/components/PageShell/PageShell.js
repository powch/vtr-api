import React from "react";
import { Container, Grid } from "@mui/material";

import HeaderBar from "./components/HeaderBar";
import BottomNav from "./components/BottomNav";
import LeftNav from "./components/LeftNav";

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;

  return (
    <>
      <HeaderBar appState={appState} />
      <Container
        sx={{
          pb: "4rem",
          pt: "1rem",
          position: "relative",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={0}
            sm={0}
            md={3}
            sx={{ borderRight: "0.063rem solid rgb(0,0,0,0.26)" }}
          >
            <LeftNav appState={appState} />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
      <BottomNav appState={appState} />
    </>
  );
};

export default PageShell;
