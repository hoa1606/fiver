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

export interface UserRequestBody{
    pageIndex: number;
    pageSize:  number;
}

