import React from "react";
import { Box, Skeleton, Paper, Stack } from "@mui/material";

const SkeletonApiCard: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        padding: 2,
        minWidth: 300,
        height: 220,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack spacing={1} sx={{ height: "100%" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Skeleton variant="text" width="60%" height={32} />
          <Skeleton
            variant="rectangular"
            width="25%"
            height={24}
            sx={{ borderRadius: 1 }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="80%" />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="auto"
        >
          <Skeleton variant="text" width="30%" height={28} />
          <Skeleton
            variant="rectangular"
            width="25%"
            height={36}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default SkeletonApiCard;
