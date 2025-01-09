import React, { useState, useEffect, ReactNode } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { WorkListApi } from '../../apis/work';
import { Content, DsNhomChiTietLoai } from '../../interfaces/worklist.interface';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [scrolling, setScrolling] = useState(false);
  const [workItems, setWorkItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchWorkList = async () => {
      try {
        const data = await WorkListApi.getMenuLoaiCongViec();
        setWorkItems(data.content || []);
      } catch (error) {
        setError('Không thể lấy danh sách công việc.');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkList();
  }, []);

  const handleMouseEnter = (itemId: number) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      {/* Thanh AppBar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolling ? 'rgb(33, 33, 33)' : 'transparent',
          transition: 'background-color 0.3s ease',
          boxShadow: scrolling ? 3 : 'none',
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="a" href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Fiverr
          </Typography>
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

      {/* Thanh menu ngang */}
      <Box
        sx={{
          position: 'sticky',
          top: '64px',
          zIndex: 100,
          backgroundColor: scrolling ? 'rgb(33, 33, 33)' : 'transparent',
          overflowX: 'auto',
          padding: '8px 16px',
          boxShadow: scrolling ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          color: 'white',
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {workItems.map((item) => (
              <Box
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                sx={{ position: 'relative', cursor: 'pointer' }}
              >
                <Typography variant="body1">{item.tenLoaiCongViec}</Typography>

                {/* Sublist hiển thị khi rê chuột */}
                {hoveredItem === item.id && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      padding: 2,
                      zIndex: 999,
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dsNhomChiTietLoai.map((group) => (
                      <Box key={group.id} sx={{ marginBottom: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {group.tenNhom}
                        </Typography>
                        <List>
                          {group.dsChiTietLoai.map((detail) => (
                            <ListItem key={detail.id} disablePadding>
                              <ListItemText primary={detail.tenChiTiet} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Nội dung chính */}
      <Box component="main" sx={{ backgroundColor: '#212121', minHeight: '100vh' }}>
        {children}
      </Box>
    </div>
  );
};

export default MainLayout;
