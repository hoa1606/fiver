import {
  adminInteface,
  serviceManagermentInteface,
  typeWorkManagermentInteface,
  useManagermentInteface,
  workManagermentInteface,
} from "../interfaces/admin.inteface";
import fetcher from "./fetcher";

// Người dùng phân trang
export const adminApi = {
  // Người dùng phân trang
  getUserListPagination: async (params?: {
    page?: number;
    pageSize?: number;
  }): Promise<adminInteface<useManagermentInteface[]>> => {
    const { page = 1, pageSize = 10 } = params || {};

    try {
      const response = await fetcher(
        `users/phan-trang-tim-kiem?pageIndex=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.content;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error;
    }
  },

  DeleteUser: async (id: string): Promise<void> => {
    try {
      const response = await fetcher(`/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data.content;
    } catch (error) {
      console.error("Error:", error);
    }
  },

  // công việc phân trang
  getWordListPagination: async (params?: {
    page?: number;
    pageSize?: number;
  }): Promise<adminInteface<workManagermentInteface[]>> => {
    const { page = 1, pageSize = 10 } = params || {};

    try {
      const response = await fetcher(
        `cong-viec/phan-trang-tim-kiem?pageIndex=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.content;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error;
    }
  },

  // loại công việc phân trang
  getTypeWordListPagination: async (params?: {
    page?: number;
    pageSize?: number;
  }): Promise<adminInteface<typeWorkManagermentInteface[]>> => {
    const { page = 1, pageSize = 10 } = params || {};

    try {
      const response = await fetcher(
        `loai-cong-viec/phan-trang-tim-kiem?pageIndex=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.content;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error;
    }
  },

  // loại công việc phân trang
  getServiceListPagination: async (params?: {
    page?: number;
    pageSize?: number;
  }): Promise<adminInteface<serviceManagermentInteface[]>> => {
    const { page = 1, pageSize = 10 } = params || {};

    try {
      const response = await fetcher(
        `thue-cong-viec/phan-trang-tim-kiem?pageIndex=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.content;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error;
    }
  },
};
