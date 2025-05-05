import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import BlockIcon from "@mui/icons-material/Block";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckIcon from "@mui/icons-material/Check";

const FeatureGrid = () => {
  const features = [
    {
      icon: <FingerprintIcon fontSize="large" />,
      title: "Bot Fingerprinting",
      description:
        "Identify devices and sessions uniquely using advanced fingerprinting techniques.",
      bulletPoints: [
        "Device recognition",
        "Session tracking",
        "Browser identification",
      ],
    },
    {
      icon: <VerifiedUserIcon fontSize="large" />,
      title: "Invisible CAPTCHA",
      description:
        "Validate human users without disrupting their experience with visible challenges.",
      image: "/assets/captcha.jpeg",
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: "JavaScript Bot Defense",
      description:
        "Embed lightweight JS scripts to detect automation and emulate-resistant behaviors.",
      image: "/assets/defencebot.jpeg",
    },
    {
      icon: <BugReportIcon fontSize="large" />,
      title: "Honeypot Traps",
      description:
        "Silently catch and log malicious bots using hidden interactive fields.",
      image: "/assets/traps.jpeg",
    },
    {
      icon: <BlockIcon fontSize="large" />,
      title: "API Access Throttling",
      description:
        "Limit abuse by controlling API call frequency per IP, session, or token.",
      image: "/assets/throttling.jpg",
    },
    {
      icon: <PsychologyIcon fontSize="large" />,
      title: "ML-Based Bot Detection",
      description:
        "Deploy machine learning models trained to spot modern bot patterns.",
      image: "/assets/ml.jpeg",
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        fontWeight={600}
        sx={{ mb: 6 }}
      >
        Everything you need to protect your app
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                border: "1px solid #eee",
                borderRadius: 3,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                },
              }}
            >
              <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>

              {feature.bulletPoints && (
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {feature.bulletPoints.map((point, i) => (
                    <Box
                      key={i}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <CheckIcon
                        fontSize="small"
                        sx={{ color: "success.main" }}
                      />
                      <Typography variant="body2">{point}</Typography>
                    </Box>
                  ))}
                </Stack>
              )}

              {feature.image && (
                <Box
                  sx={{
                    mt: 2,
                    height: 160,
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "#ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureGrid;
