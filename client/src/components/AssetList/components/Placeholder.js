import React from "react";
import { Grid, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const Placeholder = () => (
  <Grid container rowSpacing={5}>
    <Grid
      item
      mt={10}
      xs={12}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Favorite color="disabled" sx={{ height: "5em", width: "5em" }} />
    </Grid>
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Typography fontWeight={"bold"} variant="body2" color="rgb(0,0,0,0.26)">
        Assets you add to your favorites show up here!
      </Typography>
    </Grid>
  </Grid>
);

export default Placeholder;
