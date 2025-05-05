import React from "react";
import { Box, Typography, Chip, Button, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ApiCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  onView: () => void;
}

const ApiCard: React.FC<ApiCardProps> = ({
  id,
  name,
  category,
  description,
  price,
  onView,
}) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    onView();
    navigate(`/api/${id}`);
  };

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
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#1f2937" }}>
            {name}
          </Typography>
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: "#f3f4f6",
              color: "#6b7280",
              fontWeight: 500,
              textTransform: "uppercase",
              fontSize: "0.7rem",
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            flex: 1,
          }}
        >
          {description}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="auto"
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, wordBreak: "break-word" }}
          >
            {price}/month
          </Typography>
          <Button
            onClick={handleViewClick}
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 2,
              textTransform: "none",
              px: 2,
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            View
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ApiCard;
