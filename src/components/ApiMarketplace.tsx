import {
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import SkeletonApiCard from "./SkeletonApiCard";
import ApiCard from "./apiCard";

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

const ApiMarketplace = () => {
  const [apiServices, setApiServices] = useState<ApiService[]>([]);
  const [filteredServices, setFilteredServices] = useState<ApiService[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const fetchApiServices = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("api_services").select("*");
    if (error) {
      console.error(error);
    } else if (data) {
      setApiServices(data);
      setFilteredServices(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApiServices();
  }, []);

  useEffect(() => {
    if (apiServices.length === 0) return;

    let result = [...apiServices];

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        (service) =>
          service.name.toLowerCase().includes(searchLower) ||
          service.category.toLowerCase().includes(searchLower) ||
          service.description.toLowerCase().includes(searchLower)
      );
    }

    if (selectedCategory !== "All categories") {
      result = result.filter(
        (service) => service.category === selectedCategory
      );
    }

    setFilteredServices(result);
  }, [searchTerm, selectedCategory, apiServices]);

  const categories = [
    "All categories",
    ...new Set(apiServices.map((api) => api.category)),
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Stack
      sx={{
        mt: 0,
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Explore
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          id="search"
          placeholder="Search by name or category"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Select
          labelId="category"
          id="category"
          value={selectedCategory}
          displayEmpty
          onChange={handleCategoryChange}
          sx={{ minWidth: 200 }}
        >
          {categories.map((category, index) => (
            <MenuItem
              key={index}
              value={category}
              sx={{ textTransform: "capitalize" }}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Box sx={{ py: 4, width: "100%" }}>
        <Grid container spacing={3} alignItems="stretch">
          {isLoading ? (
            Array(6)
              .fill(null)
              .map((_, index) => (
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={index}>
                  <SkeletonApiCard />
                </Grid>
              ))
          ) : filteredServices.length > 0 ? (
            filteredServices.map((api, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                key={api.id || index}
              >
                <ApiCard
                  id={api.id}
                  name={api.name}
                  category={api.category}
                  description={api.description}
                  price={`€${api.price}`}
                  onView={() => console.log(`Viewing ${api.name}`)}
                />
              </Grid>
            ))
          ) : (
            <Box sx={{ width: "100%", textAlign: "center", py: 4 }}>
              No API services found matching your search criteria.
            </Box>
          )}
        </Grid>
      </Box>
    </Stack>
  );
};

export default ApiMarketplace;
