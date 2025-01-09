import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from "@mui/material";
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
        <CardMedia
          component="img"
          height="400"
          image={workDetails.hinhAnh || "https://via.placeholder.com/400"}
          alt={workDetails.tenCongViec}
        />
        <CardContent>
          <Typography variant="h4">{workDetails.tenCongViec}</Typography>
          <Typography variant="body1">{workDetails.moTa}</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Price: ${workDetails.giaTien}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Rating: {workDetails.saoCongViec} / 5
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WorkDetail;
