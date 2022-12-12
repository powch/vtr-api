import React from "react";
import { Box, Slide, Grid, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const CloseActionBar = ({ handleClose }) => (
  <>
    <Grid item xs={10}></Grid>
    <Grid
      item
      xs={2}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mb: "1rem",
      }}
    >
      <IconButton sx={{ pr: 0 }} onClick={handleClose}>
        <Close color="primary" />
      </IconButton>
    </Grid>
  </>
);

const SlideModal = ({ appState, children, mounted, handleClose }) => {
  const { dispatch } = appState;
  return (
    <Slide in={mounted} direction="left" mountOnEnter unmountOnExit>
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
          overflowY: "auto",
        }}
      >
        <Grid container justifyContent={"center"} alignItems={"flex-start"}>
          <CloseActionBar handleClose={handleClose} />
          {children}
        </Grid>
      </Box>
    </Slide>
  );
};

export default SlideModal;
