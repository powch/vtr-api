import React from "react";
import { Grid, Link, Typography } from "@mui/material";

import { stringToTitleCase } from "../../../App.utils";

const ArtistActionBar = ({ artist, artistLink }) => (
  <>
    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
      <Typography mr={2} variant="caption">{`Asset by: ${artist}`}</Typography>
      {artistLink
        ? artistLink.map((linkObj, idx) => {
            return (
              <Link
                key={idx}
                mr={1}
                target={"_blank"}
                rel="noopener"
                href={linkObj.link}
                variant="caption"
              >
                {stringToTitleCase(linkObj.site)}
              </Link>
            );
          })
        : null}
    </Grid>
  </>
);

export default ArtistActionBar;
