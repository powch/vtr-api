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
import { ASSET_LIST_LOADING } from "../constants";

const AssetCard = ({ imageUrl, name, description, id, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 150, marginBottom: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" height={75} image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h6" fontSize={"0.75rem"}>
            {name}
          </Typography>
          <Typography variant="body2" fontSize={"0.5rem"}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const AssetList = ({ appState }) => {
  const { dispatch, state } = appState;
  const { assetList, pagination } = state;
  const { nextPage } = pagination || {};

  const handleClick = (id) =>
    dispatch({ action: "SELECT_ASSET_TO_VIEW", payload: id });

  const handleLoadMore = () =>
    dispatch({ action: "CHANGE_PAGE", payload: ASSET_LIST_LOADING });

  return (
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
            handleClick={handleClick}
          />
        ))}
      </Box>
      {nextPage ? (
        <Button variant="text" fullWidth onClick={handleLoadMore}>
          Load more assets
        </Button>
      ) : null}
    </>
  );
};

export default AssetList;
