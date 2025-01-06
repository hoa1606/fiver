import { ApiReponse } from "../interfaces/api.inteface";
import { ContenUser, CurrentUser, LoginRequestBody, RegisterRequestBody } from "../interfaces/user.inteface";
import fetcher from "./fetcher";



export const userApi = {
    login: async(body: LoginRequestBody) =>{
        try {
            const response =await fetcher.post<ApiReponse<ContenUser<CurrentUser>>>('/auth/signin', body, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            return response.data.content;
        } catch (error) {
            throw error;
        }
    },

    register: async(body: RegisterRequestBody) =>{
        try {
            const response =await fetcher.post<ApiReponse<ContenUser<CurrentUser>>>('/auth/signup', body, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            return response.data.content;
        } catch (error) {
            throw error;
        }
    },
}