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
} from "@mui/material";
import { WorkApi } from "../../../apis/work";

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
      <Card
        sx={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          maxWidth: "800px",
          margin: "0 auto",
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
    </Box>
  );
};

export default WorkDetail;
