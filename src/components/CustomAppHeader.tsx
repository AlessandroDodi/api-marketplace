import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddApiServiceForm from "./AddApiServiceForm";

const CustomAppHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenForm = () => {
    setFormOpen(true);
    handleMenuClose();
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: isMobile ? "8px 16px" : "8px 24px",
          }}
        >
          <Button component={Link} to="/">
            <Stack direction="row" spacing={1} alignItems="center">
              <ApiIcon sx={{ color: "black" }} />
              <Typography
                variant="h6"
                noWrap
                sx={{ color: "black", fontWeight: 500 }}
              >
                API Marketplace
              </Typography>
            </Stack>
          </Button>

          {!isMobile ? (
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                component={Link}
                to="/explore"
                sx={{ color: "text.secondary", textTransform: "none" }}
              >
                Explore
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpenForm}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#222",
                  },
                }}
              >
                Add New API Service
              </Button>
            </Stack>
          ) : (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  style: {
                    width: "100%",
                    maxWidth: "100%",
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  },
                }}
                sx={{
                  mt: 5,
                  "& .MuiMenu-list": {
                    width: "100%",
                    padding: 2,
                  },
                  "& .MuiMenu-paper": {
                    left: "0 !important",
                    right: "0 !important",
                  },
                }}
                slotProps={{
                  paper: {
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      left: 0,
                      right: 0,
                    },
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/explore"
                  onClick={handleMenuClose}
                  sx={{ py: 1.5 }}
                >
                  Explore
                </MenuItem>
                <Box sx={{ px: 1, py: 1 }}>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOpenForm}
                    fullWidth
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#222",
                      },
                    }}
                  >
                    Add New API Service
                  </Button>
                </Box>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      <AddApiServiceForm open={formOpen} onClose={handleCloseForm} />
    </>
  );
};

export default CustomAppHeader;
