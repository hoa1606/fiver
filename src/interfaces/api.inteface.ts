export interface ApiReponse<T> {
    statusCode: number;
    content:    T;
    dateTime:   Date
}