export interface ApiReponse<T> {
    statusCode: number;
    content:    T;
    dateTime:   Date
}

export interface ApiWork<T>{
    statusCode: number;
    content: T
}