import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e2e2e2",
      contrastText: "#000000",
    },
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: "2.5rem",
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#222",
          },
        },
        outlined: {
          borderColor: "#e2e2e2",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            borderColor: "#d0d0d0",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "& fieldset": {
              borderColor: "#e2e2e2",
            },
            "&:hover fieldset": {
              borderColor: "#d0d0d0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000000",
              borderWidth: 1,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          borderRadius: 12,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e2e2e2",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d0d0d0",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000",
            borderWidth: 1,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e2e2e2",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d0d0d0",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000",
            borderWidth: 1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
