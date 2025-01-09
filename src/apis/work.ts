import fetcher from "./fetcher";
import { ApiWork } from "../interfaces/api.inteface";
import { work, workContent } from "../interfaces/work.interface";
import {RootObject} from "../interfaces/worklist.interface";

export const WorkApi = {
  // Lấy danh sách công việc theo tên
  getWorksByName: async (searchName: string): Promise<workContent<work>[]> => {
    try {
      const response = await fetcher.get<ApiWork<workContent<work>[]>>(
        `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${searchName}`
      );
      return response.data.content; // Danh sách công việc
    } catch (error: any) {
      console.error("Error fetching work by name:", error.message);
      throw new Error(error?.response?.data?.message || "Failed to fetch work list.");
    }
  },

  // Lấy chi tiết công việc theo ID
  getWorkById: async (id: number): Promise<work> => {
    try {
      const response = await fetcher.get<ApiWork<work>>(`/cong-viec/${id}`);
      return response.data.content; // Chi tiết công việc
    } catch (error: any) {
      console.error("Error fetching work by ID:", error.message);
      throw new Error(error?.response?.data?.message || "Failed to fetch work details.");
    }
  },
};


export const WorkListApi = {
  // Lấy danh sách menu loại công việc
  getMenuLoaiCongViec: async (): Promise<RootObject> => {
    try {
      const response = await fetcher.get<RootObject>("/cong-viec/lay-menu-loai-cong-viec");
      return response.data; // Trả về toàn bộ dữ liệu RootObject
    } catch (error: any) {
      console.error("Error fetching menu loai cong viec:", error.message);
      throw new Error(error?.response?.data?.message || "Failed to fetch menu loai cong viec.");
    }
  },
};

export const WorkDeatil = {
  
}

