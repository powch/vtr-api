import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { ASSET_LIST_LOADING } from "../../constants";

import { truncateString } from "../../App.utils";
import Placeholder from "./components/Placeholder";

const AssetCard = ({ imageUrl, name, description, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 300, marginBottom: "1rem" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height={150} image={imageUrl} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            fontSize={"1rem"}
            lineHeight={"1.2"}
          >
            {truncateString(name, 75)}
          </Typography>
          <Typography variant="body2" fontSize={"0.75rem"} lineHeight={"1.2"}>
            {truncateString(description, 75)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const AssetList = ({ appState }) => {
  const { dispatch, state } = appState;
  const { assetList, pagination, sortBy } = state;
  const { nextPage } = pagination || {};

  const handleClick = (id) =>
    dispatch({ action: "SELECT_ASSET_TO_VIEW", payload: id });

  const handleLoadMore = () =>
    dispatch({ action: "CHANGE_PAGE", payload: ASSET_LIST_LOADING });

  return (
    <>
      {sortBy === "favorites" && assetList.length === 0 ? (
        <Placeholder />
      ) : (
        <>
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
            {assetList?.map((asset, idx) => (
              <AssetCard
                key={idx}
                imageUrl={asset.image}
                name={asset.name}
                description={asset.description}
                id={asset._id}
                handleClick={() => handleClick(asset._id)}
              />
            ))}
          </Box>
          {nextPage ? (
            <Button variant="text" fullWidth onClick={handleLoadMore}>
              Load more assets
            </Button>
          ) : null}
        </>
      )}
    </>
  );
};

export default AssetList;
