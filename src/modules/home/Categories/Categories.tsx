import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { WorkApi } from "../../../apis/work";
import { End } from "../end";

const Categories: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [workList, setWorkList] = useState<any[]>([]);
  const searchTerm = location.state?.searchTerm || ""; // Lấy searchTerm từ state

  useEffect(() => {
    if (searchTerm) {
      fetchWorksByName();
    }
  }, [searchTerm]);

  const fetchWorksByName = async () => {
    try {
      const works = await WorkApi.getWorksByName(searchTerm);
      setWorkList(works || []);
    } catch (error: any) {
      console.error("Error fetching works:", error.message);
      alert("Failed to fetch works.");
    }
  };

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#0d1f1f",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Results for: <em>{searchTerm}</em>
        </Typography>
        {workList.length === 0 ? (
          <Typography>No results found for "<em>{searchTerm}</em>".</Typography>
        ) : (
          <Grid container spacing={4}>
            {workList.map((item: any) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card
                  sx={{
                    backgroundColor: "#1a1a1a",
                    color: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.congViec.hinhAnh || "https://via.placeholder.com/140"}
                    alt={item.congViec.tenCongViec}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.congViec.tenCongViec}</Typography>
                    <Typography variant="body2">
                      {item.congViec.moTaNgan || "No short description available."}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() => navigate(`/categories/detail/${item.congViec.id}`)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <End />
    </div>
  );
};

export default Categories;
