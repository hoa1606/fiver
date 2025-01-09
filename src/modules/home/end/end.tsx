import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const End = () => {
  return (
    <Box sx={{ bgcolor: '#1c1c1c', color: '#fff', py: 8, px: 4 }}>

      
      <Grid container spacing={3}>
        {/* Cột 1: Categories */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Categories
          </Typography>
          {[
            'Graphics & Design',
            'Digital Marketing',
            'Writing & Translation',
            'Video & Animation',
            'Music & Audio',
            'Programming & Tech',
            'Data',
            'Business',
            'Lifestyle',
            'Sitemap',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Cột 2: About */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            About
          </Typography>
          {[
            'Careers',
            'Press & News',
            'Partnerships',
            'Privacy Policy',
            'Terms of Service',
            'Intellectual Property Claims',
            'Investor Relations',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Cột 3: Support */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Support
          </Typography>
          {[
            'Help & Support',
            'Trust & Safety',
            'Selling on Fiverr',
            'Buying on Fiverr',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Cột 4: Community */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Community
          </Typography>
          {[
            'Events',
            'Blog',
            'Forum',
            'Community Standards',
            'Podcast',
            'Affiliates',
            'Invite a Friend',
            'Become a Seller',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Cột 5: More From Fiverr */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            More From Fiverr
          </Typography>
          {[
            'Fiverr Business',
            'Fiverr Pro',
            'Fiverr Studios',
            'Fiverr Logo Maker',
            'Fiverr Guides',
            'Get Inspired',
            'Fiverr Select',
            'ClearVoice',
            'Content Marketing',
            'Fiverr Workspace',
            'Invoice Software',
            'Learn',
            'Online Courses',
            'Working Not Working',
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 0.5 }}
            >
              {item}
            </Link>
          ))}
        </Grid>
      </Grid>

     
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#212121',
        color: '#fff',
        padding: '20px 40px',
        borderTop: '1px solid #444',
      }}
    >
     
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}
        >
          fiverr <span style={{ fontSize: '14px', color: '#aaa' }}>®</span>
        </Typography>
        <Typography
          sx={{ fontSize: '14px', color: '#aaa' }}
        >
          © Fiverr International Ltd. 2022
        </Typography>
      </Box>

   
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <Link href="#" color="inherit" underline="none">
          <TwitterIcon sx={{ fontSize: '20px', color: '#aaa', '&:hover': { color: '#1dbf73' } }} />
        </Link>
        <Link href="#" color="inherit" underline="none">
          <FacebookIcon sx={{ fontSize: '20px', color: '#aaa', '&:hover': { color: '#1dbf73' } }} />
        </Link>
        <Link href="#" color="inherit" underline="none">
          <LinkedInIcon sx={{ fontSize: '20px', color: '#aaa', '&:hover': { color: '#1dbf73' } }} />
        </Link>
        <Link href="#" color="inherit" underline="none">
          <PinterestIcon sx={{ fontSize: '20px', color: '#aaa', '&:hover': { color: '#1dbf73' } }} />
        </Link>
        <Link href="#" color="inherit" underline="none">
          <InstagramIcon sx={{ fontSize: '20px', color: '#aaa', '&:hover': { color: '#1dbf73' } }} />
        </Link>
      </Box>

     
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Typography sx={{ fontSize: '14px', color: '#aaa', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
          English
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#aaa', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
          US$ USD
        </Typography>
      </Box>
    </Box>
    </Box>
  );
};

export default End;
