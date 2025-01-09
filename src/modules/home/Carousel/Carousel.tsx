import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const Carousel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
    
      navigate("/categories", { state: { searchTerm } });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "50%",
          padding: "2rem",
          backgroundColor: "#0d1f1f",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}>
          Find the perfect freelance services for your business
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%", maxWidth: "600px" }}>
          <TextField
            variant="outlined"
            placeholder="Try 'design logo'"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              mr: 2,
            }}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleSearch}
            sx={{ padding: "0.8rem 2rem" }}
          >
            Search
          </Button>
        </Box>
      </Box>

 
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#0d1f1f",
        }}
      >
      </Box>
    </Box>
  );
};

export default Carousel;
