import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  CircularProgress,
  Rating,
  Grid,
  Button,
} from "@mui/material";
import { WorkApi } from "../../../apis/work";
import { End } from "../end";

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [workDetails, setWorkDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchWorkDetails(Number(id));
    }
  }, [id]);

  const fetchWorkDetails = async (id: number) => {
    try {
      const details = await WorkApi.getWorkById(id);
      setWorkDetails(details);
    } catch (error: any) {
      console.error("Error fetching work details:", error.message);
      alert("Failed to fetch work details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#0d1f1f",
          color: "#fff",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (!workDetails) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#0d1f1f",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <Typography variant="h5">Work details not found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0d1f1f",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <Grid container spacing={4}>
        {/* Phần nội dung chính */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {workDetails.tenCongViec}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Avatar
                  src={workDetails.avatar || "https://via.placeholder.com/150"}
                  alt={workDetails.tenNguoiTao}
                  sx={{ marginRight: "1rem" }}
                />
                <Box>
                  <Typography variant="h6">
                    {workDetails.tenNguoiTao || "Unknown Creator"}
                  </Typography>
                  <Rating
                    value={workDetails.saoCongViec || 0}
                    readOnly
                    precision={0.1}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <Typography variant="body2">
                    {workDetails.danhGia || 0} reviews
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardMedia
              component="img"
              height="400"
              image={workDetails.hinhAnh || "https://via.placeholder.com/400"}
              alt={workDetails.tenCongViec}
            />
          </Card>

          {/* Phần About This Gig */}
          <Box
            sx={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              padding: "1.5rem",
              marginTop: "2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              textAlign: "left",
            }}
          >
            <Typography variant="h5" gutterBottom>
              About This Gig
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {workDetails.moTa || "No description available."}
            </Typography>
          </Box>
        </Grid>

        {/* Phần thuê công việc */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "17px", color: "#5a5b5c" }}
            >
              {workDetails.moTaNgan || "No short description available."}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: "15px" }}>
              14 Days Delivery
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: "15px" }}>
              Unlimited Revisions
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: "15px" }}>
              Good feature
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: "1rem" }}
            >
              Continue (${workDetails.giaTien || "N/A"})
            </Button>
          </Box>
        </Grid>
      </Grid>
      <End/>
    </Box>
  );
};

export default WorkDetail;
