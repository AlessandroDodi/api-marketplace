import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabase-client";
import SkeletonApiDetailPage from "../components/SkeletonApiDetailPage";

interface ApiService {
  id: number;
  created_at: string;
  name: string;
  description: string;
  category: string;
  price: number;
  seller_name: string;
  company_email: string;
}

const ApiDetailPageContent: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [apiData, setApiData] = useState<ApiService | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchApiDetails = async () => {
      setIsLoading(true);

      try {
        const { data, error: supabaseError } = await supabase
          .from("api_services")
          .select("*")
          .eq("id", Number(id))
          .single();

        if (supabaseError) {
          console.error("Error fetching API details:", supabaseError);
          navigate("/explore");
          return;
        } else if (data) {
          setApiData(data);
        } else {
          setError("API service not found.");
        }
      } catch (err) {
        console.error("Error in fetch operation:", err);
        setError("An unexpected error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchApiDetails();
    }
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  const handleInterested = () => {
    setShowEmail(true);
    setSnackbarOpen(true);
    // Copy email to clipboard
    if (apiData?.company_email) {
      navigator.clipboard
        .writeText(apiData.company_email)
        .catch((err) =>
          console.error("Could not copy email to clipboard:", err)
        );
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (isLoading) {
    return <SkeletonApiDetailPage />;
  }

  if (error || !apiData) {
    return (
      <Stack>
        <Box sx={{ mb: 3 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
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
            border: "1px solid #e2e2e2",
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" color="error" sx={{ mb: 2 }}>
            {error || "API service not found"}
          </Typography>
          <Button variant="contained" onClick={handleBack}>
            Return to API Marketplace
          </Button>
        </Paper>
      </Stack>
    );
  }

  return (
    <Stack>
      <Box sx={{ mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
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
          border: "1px solid #e2e2e2",
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
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 600, mb: 1, wordBreak: "break-word" }}
            >
              {apiData.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ wordBreak: "break-word" }}
            >
              By {apiData.seller_name}
            </Typography>
          </Box>
          <Chip
            label={apiData.category}
            size="small"
            sx={{
              backgroundColor: "#f3f4f6",
              color: "#6b7280",
              fontWeight: 500,
              textTransform: "uppercase",
              fontSize: "0.7rem",
              mt: { xs: 2, sm: 0 },
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            About this service
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ wordBreak: "break-word" }}
          >
            {apiData.description}
          </Typography>
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
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            €{apiData.price}/month
          </Typography>

          {showEmail ? (
            <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Contact the vendor at:
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {apiData.company_email}
              </Typography>
            </Box>
          ) : (
            <Button
              variant="contained"
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
              onClick={handleInterested}
            >
              I'm interested
            </Button>
          )}
        </Box>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ApiDetailPageContent;
