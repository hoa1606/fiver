export interface ApiReponse<T> {
    statusCode: number;
    message?: string;
    content:    T;
    dateTime:   Date
}

export interface ApiWork<T>{
    statusCode: number;
    content: T
}