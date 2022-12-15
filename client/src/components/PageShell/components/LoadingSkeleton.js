import React from "react";
import { Box, Skeleton, Stack, Paper } from "@mui/material";

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
      <Paper sx={{ mb: 3, pb: 2 }}>
        <Stack spacing={1}>
          <Skeleton
            sx={{ width: 300, height: 150 }}
            variant="rounded"
          />
          <Stack spacing={1} pl={2}>
            <Skeleton variant="string" width={225} />
            <Skeleton variant="string" width={200} />
            <Skeleton variant="string" width={225} />
          </Stack>
        </Stack>
      </Paper>
    ))}
  </Box>
);

export default LoadingSkeleton;
