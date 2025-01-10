import React, { useState, useEffect, ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, TextField, CircularProgress, Alert } from '@mui/material';
import { WorkListApi } from '../../apis/work'; 

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [workItems, setWorkItems] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
        setShowSearch(true);
      } else {
        setScrolling(false);
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const fetchWorkList = async () => {
      try {
        const data = await WorkListApi.getMenuLoaiCongViec();
        setWorkItems(data.items || []); 
        setLoading(false);
      } catch (error) {
        setError('Không thể lấy danh sách công việc.');
        setLoading(false);
      }
    };

    fetchWorkList();
  }, []);

  return (
    <div>
   
      <AppBar
        position="fixed"
        color={scrolling ? 'primary' : 'transparent'}
        sx={{
          boxShadow: scrolling ? 3 : 'none',
          transition: 'all 0.3s ease',
          zIndex: 100, 
          backgroundColor: scrolling ? '#333' : 'transparent', 
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <Typography variant="h6" component="a" href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Fiverr
          </Typography>

         
          {showSearch && (
            <Box sx={{ flexGrow: 1, mx: 3 }}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Search services, freelancers, etc."
                sx={{ backgroundColor: 'white' }}
              />
            </Box>
          )}

         
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="/business">
              Fiverr Business
            </Button>
            <Button color="inherit" href="/explore">
              Explore
            </Button>
            <Button color="inherit" href="/language">
              English
            </Button>
            <Button color="inherit" href="/currency">
              US$ USD
            </Button>
            <Button color="inherit" href="/become-seller">
              Become a Seller
            </Button>
            <Button color="inherit" href="/auth/login">
              Sign In
            </Button>
            <Button variant="contained" color="success" href="/register">
              Join
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

     
      <Box
        sx={{
          position: 'sticky', 
          top: '64px', 
          zIndex: 99, 
          backgroundColor: scrolling ? '#333' : 'transparent', 
          overflowX: 'auto', 
          padding: '8px 16px',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
        }}
      >
        {loading ? (
          <CircularProgress /> 
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : workItems.length === 0 ? (
          <Typography>Không có công việc nào.</Typography> 
        ) : (
          <Box>
            <Typography variant="h6">Danh sách công việc:</Typography>
            <ul>
              {workItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </Box>
        )}
      </Box>

      <Box component="main" sx={{ backgroundColor: '#212121', minHeight: '100vh' }}>
        {children}
      </Box>
      
    </div>
  );
};

export default MainLayout;
