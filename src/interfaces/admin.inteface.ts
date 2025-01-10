export interface adminInteface<T> {
    pageIndex: number;
    pageSize:  number;
    totalRow:  number;
    keywords:  null;
    data:      T;
}

export interface useManagermentInteface {
    id:            number;
    name:          string;
    email:         string;
    password:      string;
    phone:         string;
    birthday:      string;
    avatar:        string;
    gender:        boolean;
    role:          string;
    skill:         string[];
    certification: string[];
    bookingJob:    string[];
}

export interface workManagermentInteface{
    id:                    number;
    tenCongViec:           string;
    danhGia:               number;
    giaTien:               number;
    nguoiTao:              number;
    hinhAnh:               string;
    moTa:                  string;
    maChiTietLoaiCongViec: number;
    moTaNgan:              string;
    saoCongViec:           number;
}

export interface typeWorkManagermentInteface{
    id:              number;
    tenLoaiCongViec: string;
}

export interface serviceManagermentInteface{
    id:          number;
    maCongViec:  number;
    maNguoiThue: number;
    ngayThue:    string;
    hoanThanh:   boolean;
}