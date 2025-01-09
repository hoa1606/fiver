export interface RootObject {
    statusCode: number;
    content: Content[];
  }
  export interface Content {
    id: number;
    tenLoaiCongViec: string;
    dsNhomChiTietLoai: DsNhomChiTietLoai[];
  }
  export interface DsNhomChiTietLoai {
    id: number;
    tenNhom: string;
    hinhAnh: string;
    maLoaiCongviec: number;
    dsChiTietLoai: DsChiTietLoai[];
  }
  export interface DsChiTietLoai {
    id: number;
    tenChiTiet: string;
  }