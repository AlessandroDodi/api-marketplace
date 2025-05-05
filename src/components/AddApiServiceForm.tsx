import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  useMediaQuery,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { supabase } from "../supabase-client";

interface AddApiServiceFormProps {
  open: boolean;
  onClose: () => void;
  onApiAdded?: () => void;
}

const AddApiServiceForm: React.FC<AddApiServiceFormProps> = ({
  open,
  onClose,
  onApiAdded,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    seller_name: "",
    company_email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    "Fingerprinting",
    "CAPTCHA Alternative",
    "Bot Detection",
    "Fraud Prevention",
    "IP Intelligence",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      if (
        !formData.name ||
        !formData.description ||
        !formData.category ||
        !formData.price ||
        !formData.seller_name ||
        !formData.company_email
      ) {
        throw new Error("Please fill in all fields");
      }

      const price = parseFloat(formData.price);
      if (isNaN(price) || price <= 0) {
        throw new Error("Please enter a valid price");
      }

      const { error: supabaseError } = await supabase
        .from("api_services")
        .insert({
          name: formData.name,
          description: formData.description,
          category: formData.category,
          price: price,
          seller_name: formData.seller_name,
          company_email: formData.company_email,
        });

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        seller_name: "",
        company_email: "",
      });

      if (onApiAdded) {
        onApiAdded();
      }

      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer
      anchor={isMobile ? "bottom" : "right"}
      open={open}
      onClose={onClose}
      sx={{
        borderRadius: isMobile ? "16px 16px 0 0" : 12,
        "& .MuiDrawer-paper": {
          width: isMobile ? "100%" : "450px",
          borderRadius: isMobile
            ? "16px 16px 0 0 !important"
            : "12px !important",
          maxHeight: isMobile ? "90vh" : "100%",
          boxSizing: "border-box", // Ensure padding is included in width calculation
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: "100%", // Ensure content doesn't overflow horizontally
        }}
      >
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 1,
              cursor: "grab",
              borderBottom: "1px solid #eee",
            }}
          >
            <DragHandleIcon color="action" />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1.5,
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography variant="h5" component="div" fontWeight={600}>
            Add API Service
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            p: 1.5,
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "hidden", // Prevent horizontal scrolling
            width: "100%", // Ensure full width
          }}
        >
          <Stack spacing={3} sx={{ width: "100%" }}>
            <TextField
              label="API Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              placeholder="API Name"
            />

            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              placeholder="Description"
            />

            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData.category}
                onChange={handleChange}
                label="Category"
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Price ($/month)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              placeholder="299"
              InputProps={{
                inputProps: { min: 0 },
              }}
            />

            <TextField
              label="Seller name"
              name="seller_name"
              value={formData.seller_name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              placeholder="Seller name"
            />

            <TextField
              label="Company Email"
              name="company_email"
              type="email"
              value={formData.company_email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              placeholder="contact@example.com"
            />

            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
          </Stack>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            width: "100%", // Ensure full width
            position: "sticky", // Make the button area sticky
            bottom: 0, // Stick to bottom
            zIndex: 1, // Ensure it stays above content
            backgroundColor: "background.paper", // Match background color
          }}
        >
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={isSubmitting}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            Add service
          </Button>
        </Paper>
      </Box>
    </Drawer>
  );
};

export default AddApiServiceForm;
