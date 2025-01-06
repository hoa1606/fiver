export interface ContenUser<T> {
    user:  T;
    token: string;
};

export interface CurrentUser {
    id:            number;
    name:          string;
    email:         string;
    password:      string;
    phone:         string;
    birthday:      Date;
    avatar:        string;
    gender:        boolean;
    role:          string;
    skill:         null[];
    certification: null[];
    bookingJob:    any[];
};

export interface LoginRequestBody {
    email:         string,
    password:      string;
};

export interface RegisterRequestBody {
    email:         string,
    password:      string;
    name:          string;
    phone:         string;
};