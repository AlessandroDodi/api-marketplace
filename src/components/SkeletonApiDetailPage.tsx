import React from "react";
import { Box, Button, Paper, Stack, Skeleton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SkeletonApiDetailPage: React.FC = () => {
  return (
    <Stack>
      <Box sx={{ mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          disabled
          sx={{
            color: "text.secondary",
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Back to Explore
        </Button>
      </Box>

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Skeleton variant="text" width="80%" height={40} />
            <Skeleton variant="text" width="50%" height={24} />
          </Box>
          <Skeleton
            variant="rounded"
            width={80}
            height={24}
            sx={{ mt: { xs: 2, sm: 0 } }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Skeleton variant="text" width="30%" height={32} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="90%" height={20} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Skeleton variant="text" width={100} height={32} />
          <Skeleton variant="rounded" width={120} height={40} />
        </Box>
      </Paper>
    </Stack>
  );
};

export default SkeletonApiDetailPage;
