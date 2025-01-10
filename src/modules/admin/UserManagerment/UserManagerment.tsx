import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { LoadingButton } from "@mui/lab";
import useOpen from "../../../hooks/useOpen";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminApi } from "../../../apis/admin.api";

const UserManagermant = () => {
  

 

  const { data, isLoading, isError, error } = useQuery(
    ["userList", 1], // queryKey
    () => adminApi.getUserListPagination({ page: 1, pageSize: 10 }) // queryFn
  );

  

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Admin</Typography>
          <Typography color="text.primary">Dashboard</Typography>
          <Typography color="text.primary">Movie Management</Typography>
        </Breadcrumbs>

        <Button
          variant="contained"
          color="primary"
          
        >
          Add user
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 200 }}>Name</TableCell>
              <TableCell sx={{ width: 120 }}>Email</TableCell>
              <TableCell sx={{ width: 120 }}>Avata</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      style={{ width: 50, height: 50,}}
                    />
                  </TableCell>
                  <TableCell>{user.role}</TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <IconButton
                      
                      >
                        <EditOutlinedIcon color="warning" />
                      </IconButton>
                      <IconButton
                      
                      >
                        <DeleteOutlineOutlinedIcon color="error" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {isLoading && (
          <Box
            height={200}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
        {!isLoading && isError && (
          <Box
            height={200}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography textAlign="center">
              Có lỗi xảy ra, vui lòng thử lại.
            </Typography>
          </Box>
        )}
        <Box my={6} display="flex" justifyContent="flex-end">
          <Pagination
            onChange={(_event, page) => {
           
            }}
          />
        </Box>
      </TableContainer>

      
    </Box>
  );
};

export default UserManagermant;
