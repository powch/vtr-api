import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const AssetCard = () => {
  return (
    <Card sx={{ maxWidth: 150, marginBottom: "1rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={75}
          image="https://storage.ko-fi.com/cdn/useruploads/display/bc40c3cd-94ae-4622-b8fb-b94ba119be9e_icon.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" fontSize={"0.75rem"}>
            Free Christmas Cape 【Vtuber Asset】
          </Typography>
          <Typography variant="body2" fontSize={"0.5rem"}>
            Live2D VTubeStudio Asset Christmas themed cape
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AssetCard;
