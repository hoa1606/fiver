import React, { useState, useEffect } from 'react';
import { WorkListApi } from '../../../apis/work'; 
import { Box, Typography, CircularProgress } from '@mui/material';

const WorkList: React.FC = () => {
  const [workItems, setWorkItems] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkList = async () => {
      try {
        const data = await WorkListApi.getMenuLoaiCongViec();
        setWorkItems(data.items || []); 
      } catch (error) {
        setError("Không thể lấy danh sách công việc."); 
        setLoading(false);
      }
    };

    fetchWorkList();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      {loading ? (
        <CircularProgress /> 
      ) : error ? (
        <Typography color="error">{error}</Typography>  
      ) : workItems.length === 0 ? (
        <Typography>Không có công việc nào.</Typography>  
      ) : (
        <Box>
          <Typography variant="h6">Danh sách công việc:</Typography>
          <ul>
            {workItems.map((item, index) => (
              <li key={index}>{item}</li>  
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default WorkList;
