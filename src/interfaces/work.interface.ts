export interface work {
    id: number;
    tenCongViec: string;
    danhGia: number;
    giaTien: number;
    nguoiTao: number;
    hinhAnh: string;
    moTa: string;
    maChiTietLoaiCongViec: number;
    moTaNgan: string;
    saoCongViec: number;
  }
  
  export interface workContent<T> {
    id: number;
    congViec: T; // Ở đây T sẽ là work[]
    tenLoaiCongViec: string;
    tenNhomChiTietLoai: string;
    tenChiTietLoai: string;
    tenNguoiTao: string;
    avatar: string;
  }