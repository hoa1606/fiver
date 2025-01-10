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
  Menu
} from '@mui/material';
import { WorkListApi } from '../../apis/work';
import { Content, DsNhomChiTietLoai } from '../../interfaces/worklist.interface';

import { useNavigate } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [scrolling, setScrolling] = useState(false);
  const [workItems, setWorkItems] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentSubItems, setCurrentSubItems] = useState<DsNhomChiTietLoai[] | null>(null);
  const navigate = useNavigate();

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

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, subItems: DsNhomChiTietLoai[]) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubItems(subItems);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentSubItems(null);
  };

  return (
    <div style={{backgroundColor: 'rgb(33, 33, 33)'}}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        color="default"
        sx={{
          boxShadow: scrolling ? 3 : 'none',
          transition: 'all 0.3s ease',
          zIndex: 100,
          backgroundColor: scrolling ? 'rgb(33, 33, 33)' : 'transparent',
          color: 'white',
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
            <Button variant="contained" color="success" href="/auth/register">
              Join
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Horizontal menu */}
      <Box
        sx={{
          position: 'sticky',
          top: '64px',
          zIndex: 99,
          backgroundColor: scrolling ? 'rgb(33, 33, 33)' : 'transparent',
          overflowX: 'auto',
          padding: '8px 16px',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
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
                onMouseEnter={(e) => handleMenuOpen(e, item.dsNhomChiTietLoai)}
                onMouseLeave={handleMenuClose}
                sx={{ position: 'relative' }}
              >
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                  {item.tenLoaiCongViec}
                </Typography>
                {anchorEl && currentSubItems && anchorEl.textContent === item.tenLoaiCongViec && (
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{
                      mt: 1,
                      '& .MuiPaper-root': {
                        backgroundColor: 'rgb(33, 33, 33)',
                        color: 'white',
                        maxHeight: '300px',
                        overflowY: 'auto',
                        width: '250px',
                      },
                    }}
                  >
                    {currentSubItems.map((group) => (
                      <Box key={group.id} sx={{ padding: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'white' }}>
                          {group.tenNhom}
                        </Typography>
                        <List>
                          {group.dsChiTietLoai.map((detail) => (
                            <ListItem
                              key={detail.id}
                              disablePadding
                              onClick={() =>
                                navigate('/categories', {
                                  state: { searchTerm: detail.tenChiTiet },
                                })
                              }
                              sx={{ cursor: 'pointer' }}
                            >
                              <ListItemText primary={detail.tenChiTiet} sx={{ color: 'white' }} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ backgroundColor: '#212121', minHeight: '100vh' }}>
        {children}
      </Box>
    </div>
  );
};

export default MainLayout;
