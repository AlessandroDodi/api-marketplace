import React from "react";
import { Button, Typography, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

interface NotFoundPageProps {
  title?: string;
  message?: string;
  buttonText?: string;
  redirectPath?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = "404 - Page Not Found",
  message = "The page you are looking for doesn't exist or has been moved.",
  buttonText = "Return to Home",
  redirectPath = "/",
}) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(redirectPath);
  };

  return (
    <PageLayout>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "70vh" }}
      >
        <Paper
          elevation={0}
          sx={{
            border: "1px solid #e2e2e2",
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 4,
            textAlign: "center",
            maxWidth: 600,
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "5rem", fontWeight: 700, mb: 2 }}
          >
            404
          </Typography>
          <Typography variant="h5" color="error" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {message}
          </Typography>
          <Button
            variant="contained"
            onClick={handleRedirect}
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            {buttonText}
          </Button>
        </Paper>
      </Stack>
    </PageLayout>
  );
};

export default NotFoundPage;
