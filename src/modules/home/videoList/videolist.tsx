import React, { useState } from 'react';
import { Grid, Box, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CampaignIcon from "@mui/icons-material/Campaign";
import TranslateIcon from "@mui/icons-material/Translate";
import MovieIcon from "@mui/icons-material/Movie";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StyleIcon from "@mui/icons-material/Style";

const VideoList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { title: "Graphics & Design", icon: <DesignServicesIcon /> },
        { title: "Digital Marketing", icon: <CampaignIcon /> },
        { title: "Writing & Translation", icon: <TranslateIcon /> },
        { title: "Video & Animation", icon: <MovieIcon /> },
        { title: "Music & Audio", icon: <MusicNoteIcon /> },
        { title: "Programming & Tech", icon: <CodeIcon /> },
        { title: "Data", icon: <AssessmentIcon /> },
        { title: "Business", icon: <BusinessCenterIcon /> },
        { title: "Lifestyle", icon: <StyleIcon /> },
    ];

    const videos = [
        {
            src: "../../../../public/hinhanh/video2.mp4",
            title: "Tim and Dan Joo, Co-Founders | HÆRFEST",
            description: "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
        },
        {
            src: "../../../../public/hinhanh/video3.mp4",
            title: "Kay Kim, Co-Founder | rooted",
            description: "It's extremely exciting that Fiverr has freelancers from all over the world—it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."
        },
        {
            src: "../../../../public/hinhanh/video4.mp4",
            title: "Caitlin Tormey, Chief Commercial Officer | NAADAM",
            description: "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
        }
    ];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div style={{ backgroundColor: '#212121', margin: 0, padding: 0 }}>
          
            <style>
                {`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #212121;
                }
                `}
            </style>

        
            <div className="carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', minHeight: '40vh' }}>
                <button onClick={handlePrev} style={{ marginRight: '20px' }}>Previous</button>
                <div className="carousel-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <video src={videos[currentIndex].src} controls style={{ width: '300px' }}></video>
                    <div className="text-content" style={{ maxWidth: '400px' }}>
                        <h3 style={{ color: "#fff" }}>{videos[currentIndex].title}</h3>
                        <p style={{ color: "#aaa" }}>{videos[currentIndex].description}</p>
                    </div>
                </div>
                <button onClick={handleNext} style={{ marginLeft: '20px' }}>Next</button>
            </div>

            {/* Explore Section */}
            <Box sx={{ textAlign: "center", my: 4 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: "#fff", fontWeight: "bold" }}
                >
                    Explore the marketplace
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {items.map((item, index) => (
                        <Grid item key={index} xs={6} sm={4} md={2}>
                            <Box
                                sx={{
                                    backgroundColor: "#2a2a2a",
                                    borderRadius: "10px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    height: "150px",
                                    "&:hover": {
                                        backgroundColor: "#3a3a3a",
                                    },
                                }}
                            >
                                <Box sx={{ fontSize: "40px", color: "#1dbf73" }}>{item.icon}</Box>
                                <Typography
                                    variant="body1"
                                    sx={{ marginTop: "10px", fontSize: "14px" }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default VideoList;
