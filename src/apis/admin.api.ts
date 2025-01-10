import { adminInteface, useManagermentInteface } from "../interfaces/admin.inteface";
import fetcher from "./fetcher";

// Định nghĩa kiểu dữ liệu trả về từ API
export interface User {
  id: number;
  name: string;
  email: string;
  
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

// Hàm call API lấy danh sách người dùng phân trang
export const adminApi = {
  getUserListPagination: async (params?: { page?: number; pageSize?: number }): Promise<adminInteface<useManagermentInteface[]>> => {
    const { page = 1, pageSize = 10 } = params || {};

    try {
      const response = await fetcher(
        `users/phan-trang-tim-kiem?pageIndex=${page}&pageSize=${pageSize}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.content;
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      throw error;
    }
  },
};
