import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { adminApi } from '../../../apis/admin.api';

const UserList: React.FC = () => {
  // Sử dụng useQuery để call API
  const { data, isLoading, isError, error } = useQuery(
    ['userList', 1], // queryKey
    () => adminApi.getUserListPagination({ page: 1, pageSize: 10 }) // queryFn
  );

  // Loading state
  if (isLoading) return <p>Đang tải...</p>;

  // Error state
  if (isError) return <p>Có lỗi xảy ra: {error instanceof Error ? error.message : 'Không xác định'}</p>;

  // Hiển thị dữ liệu
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      {data?.data.map((user) => (
        <div key={user.id}>
          <p>Tên: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
