import { Button, Stack, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { Link } from "react-router-dom";

const zoomIn = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = () => {
  return (
    <Stack
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      spacing={2}
      padding={8}
      minHeight={"70vh"}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/assets/hero.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backgroundBlendMode: "darken",
          animation: `${zoomIn} 0.1s ease-in`,
          zIndex: -1,
        },
      }}
    >
      <Typography
        variant="h1"
        color="white"
        align="center"
        sx={{
          animation: `${fadeIn} 0.15s ease-out forwards`,
          opacity: 0,
        }}
      >
        Explore AntiBot API Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="white"
        sx={{
          maxWidth: 600,
          animation: `${fadeIn} 0s ease-out 0.2s forwards`,
          opacity: 0,
        }}
      >
        Discover and compare leading anti-bot APIs. From fingerprinting to
        CAPTCHA alternatives, find the right tools to protect your app from
        bots.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/explore"
        sx={{
          animation: `${fadeIn} 0.1s ease-out 0.3s forwards`,
          opacity: 0,
        }}
      >
        Explore APIs
      </Button>
    </Stack>
  );
};
export default HeroSection;
